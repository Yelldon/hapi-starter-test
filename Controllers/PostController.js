const PostController = {
    async get(request) {
        console.log(request)
        const { Post } = request.models();

        let query = await Post.query().findById(request.params.id)

        if (query) {
            return await query;
        } else {
            return {
                error: 'The post your are looking for does not exist.'
            }
        }
    },
        
    async post(request) {
        // console.log(request)
            
        const { Post } = request.models();

        // console.log(h)

        await Promise.all([
            Post.query().insert(request.query)
        ]);

        

        // console.log(h)
        // await Promise.all([
        //     Post.query().insert({ title: 'Guinness', text: 'Hello 1' }),
        //     Post.query().insert({ title: 'Sully', text: 'Hello 1' }),
        //     Post.query().insert({ title: 'Ren', text: 'Hello 1' })
        // ]);

        return {
            success: 'Posts Successfully created.'
        }
    }

}

module.exports = PostController