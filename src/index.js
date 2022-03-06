import { registerBlockType } from '@wordpress/blocks';

registerBlockType('gutenblock/gutenblock-script', {
  title: 'Guten Block',
  icon: 'smiley',
  category: 'layout',
  edit: ({ className }) => (
    <div className={className}>
      <h1>Hello</h1>
    </div>
  ),
  save: ({ className }) => (
    <div className={className}>
      <h1>Hi</h1>
    </div>
  ),
});
