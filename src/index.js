import { registerBlockType } from '@wordpress/blocks';
import {
  InspectorControls,
  ColorPalette,
  RichText,
  MediaUpload,
  InnerBlocks,
  BlockControls,
  AlignmentToolbar,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
const ALLOWED_BLOCKS = ['core/button'];

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
    backgroundImage: {
      type: 'string',
      default: null,
    },
    opacitySize: {
      type: 'number',
      default: 0.3,
    },
    textAlignment: {
      type: 'string',
      default: 'none',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const {
      author,
      authorColor,
      backgroundImage,
      opacitySize,
      textAlignment,
    } = attributes;
    // custom functions
    const updateAuthor = (name) => {
      // update current attributes
      setAttributes({ author: name });
    };
    const onColorChange = (color) => {
      setAttributes({ authorColor: color });
      // update current attributes
    };
    const onImageSelect = (image) => {
      setAttributes({ backgroundImage: image.sizes.full.url });
      // update current attributes
    };
    const onOpacitySize = (size) => {
      setAttributes({ opacitySize: size });
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
        <PanelBody title='Background Image'>
          <p>
            <strong>Select image:</strong>
          </p>
          {backgroundImage && <img src={backgroundImage} />}
          <MediaUpload
            value={backgroundImage}
            type='image'
            onSelect={onImageSelect}
            render={({ open }) => <button onClick={open}>Select Image</button>}
          />
          <p>
            <strong>Opacity Size:</strong>
          </p>
          <RangeControl
            label={'Overlay Opacity'}
            value={opacitySize}
            onChange={onOpacitySize}
            min={0}
            max={1}
            step={0.1}
          />
        </PanelBody>
      </InspectorControls>,
      <div className={className}>
        {
          <BlockControls>
            <AlignmentToolbar value={textAlignment} />
          </BlockControls>
        }
        <RichText
          key='editable'
          tagName='h2'
          placeholder='Author Name'
          style={{ color: authorColor }}
          value={author}
          onChange={updateAuthor}
        />
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
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
        <h1>HEHE</h1>
        <RichText.Content
          style={{ color: authorColor }}
          tagName='p'
          value={author}
        />
        <InnerBlocks.Content />
      </div>
    );
  },
});
