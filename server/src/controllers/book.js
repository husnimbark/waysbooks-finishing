const { book, user, category, bookCategory } = require("../../models");

exports.getBooks = async (req, res) => {
  try {
    let data = await book.findAll({
      include: [
        {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
     
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = data.map((item) => {
      return { ...item, image: process.env.PATH_FILE + item.image };
    });

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await book.findOne({
      where: {
        id,
      },
      include: [
        {
          model: user,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
    
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      image: process.env.PATH_FILE + data.image,
    };

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addBook = async (req, res) => {
  try {
    
    const data = {
      name: req.body.name,
      author: req.body.author,
      date: req.boy.date,
      desc: req.body.desc,
      price: req.body.price,
      ISBN: req.body.ISBN,
      pdf: req.file.file.name,
      image: req.file.file.name,
    };

    let newBook = await book.create(data);

    bookData = JSON.parse(JSON.stringify(newBook));

    res.send({
      status: "success...",
      data: {
        ...bookData,
        image: process.env.PATH_FILE + bookData.image,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const data = {
      name: req?.body?.name,
      desc: req?.body.desc,
      price: req?.body?.price,
      image: req?.file?.filename,
      qty: req?.body?.qty,
      idUser: req?.user?.id,
    };


    await book.update(data, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      data: {
        id,
        data,
        bookCategoryData,
        image: req?.file?.filename,
      },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await book.destroy({
      where: {
        id,
      },
    });



    res.send({
      status: "success",
      message: `Delete book id: ${id} finished`,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
