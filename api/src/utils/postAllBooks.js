const { Books, Genres } = require('../db');
const { capitalize } = require('./capitalize');

async function postAllBooks(allBooks) {
  try {
    allBooks.forEach(async (book) => {
      let capitalizeEditorial = await capitalize(book.editorial);
      let capitalizeAuthor = await capitalize(book.author);
      let [newBook, created] = await Books.findOrCreate({
        where: {
          name: book.name.toLowerCase(),
        },
        defaults: {
          image: book.image,
          author: capitalizeAuthor,
          description: book.description,
          price: book.price,
          stock: book.stock,
          editorial: capitalizeEditorial,
          edition: book.edition,
        }
      })

      let genresDb = await Genres.findAll()

      if (genresDb.length) {
        if (created) {
          newBook.addGenres(book.genres)
        }
      }

    })

    return { message: "Success" };
  } catch (e) {
    return { messageError: "Error" }
  }
}

module.exports = {
  postAllBooks
}
