import { registerBlockType } from '@wordpress/blocks';

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
    // custom functions
    const updateAuthor = (event) => {
      // update current attributes
      setAttributes({ author: event.target.value });
    };

    return (
      <div className={className}>
        <h1>What is your name:</h1>
        <input type='text' value={attributes.author} onChange={updateAuthor} />
      </div>
    );
  },
  save: ({ className, attributes }) => (
    <div className={className}>
      <h1>Hi {attributes.author}</h1>
    </div>
  ),
});
