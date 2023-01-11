export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      type: 'markdown',
      title: 'Content',
      name: 'content',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
