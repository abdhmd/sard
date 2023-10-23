const blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "description",
        title: "Description",
        type: "text"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },
    //   {
    //     name: "content",
    //     title: "Content",
    //     type: "array",
    //     of: [
    //       { type: "block" }
    //     ]
    //   }
    ]
  }
  
  export default blog;