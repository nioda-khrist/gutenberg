import { registerBlockType } from '@wordpress/blocks';
import {
  InspectorControls,
  ColorPalette,
  RichText,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

registerBlockType('gutenblock/gutenblock-script', {
  title: 'Guten Block',
  icon: 'smiley',
  category: 'layout',

  // custom attributes
  attributes: {
    author: {
      type: 'string',
    },
    authorColor: {
      type: 'string',
      default: 'black',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const { author, authorColor } = attributes;
    // custom functions
    const updateAuthor = (name) => {
      // update current attributes
      setAttributes({ author: name });
    };
    const onColorChange = (color) => {
      setAttributes({ authorColor: color });
      // update current attributes
    };

    // using rich text
    return [
      <InspectorControls style={{ marginBottom: '40px' }}>
        <PanelBody title='Font Color Settings'>
          <p>
            <strong>Select color:</strong>
          </p>
          <ColorPalette value={authorColor} onChange={onColorChange} />
        </PanelBody>
      </InspectorControls>,
      <div className={className}>
        <RichText
          key='editable'
          tagName='h2'
          placeholder='Author Name'
          style={{ color: authorColor }}
          value={author}
          onChange={updateAuthor}
        />
      </div>,
    ];

    // using input
    // return (
    //   <div className={className}>
    //     <h1>What is your name:</h1>
    //     <input type='text' value={attributes.author} onChange={updateAuthor} />
    //   </div>
    // );
  },
  save: ({ className, attributes }) => {
    const { author, authorColor } = attributes;

    return (
      <div className={className}>
        <RichText.Content
          style={{ color: authorColor }}
          tagName='p'
          value={author}
        />
      </div>
    );
  },
});
