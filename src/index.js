import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

registerBlockType('gutenblock/gutenblock-script', {
  title: 'Guten Block',
  icon: 'smiley',
  category: 'layout',

  // custom attributes
  attributes: {
    author: {
      type: 'string',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const { author } = attributes;
    // custom functions
    const updateAuthor = (name) => {
      // update current attributes
      setAttributes({ author: name });
    };

    // using rich text
    return (
      <div className={className}>
        <RichText
          key='editable'
          tagName='h2'
          placeholder='Author Name'
          value={author}
          onChange={updateAuthor}
        />
      </div>
    );

    // using input
    // return (
    //   <div className={className}>
    //     <h1>What is your name:</h1>
    //     <input type='text' value={attributes.author} onChange={updateAuthor} />
    //   </div>
    // );
  },
  save: ({ className, attributes }) => {
    const { author } = attributes;

    return (
      <div className={className}>
        <RichText.Content tagName='p' value={author} />
      </div>
    );
  },
});
