module.exports = {
    newNote: (parent, args)=>{
        return models.Note.create({
            author: args.author,
            content: args.content
        })
    }
}