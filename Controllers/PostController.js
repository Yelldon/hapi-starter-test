module.exports = {
    async get(request) {
        const { Post } = request.models();

        let query = await Post.query().findById(request.params.id);

        if (query) {
            return await query;
        } else {
            return {
                error: 'The post your are looking for does not exist.'
            };
        }
    },

    async post(request) {
        const { Post } = request.models();

        await Promise.all([Post.query().insert(request.query)]);

        return {
            success: 'Posts Successfully created.'
        };
    }
};
