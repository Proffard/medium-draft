/* eslint-disable global-require no-undef */
import Editor from './editor';

import beforeInput, { StringToTypeMap } from './util/beforeinput';
import RenderMap from './util/rendermap';
import Link, { findLinkEntities } from './components/entities/link';
import keyBindingFn from './util/keybinding';
import rendererFn from './components/customrenderer';
import customStyleMap from './util/customstylemap';
import createEditorState from './model/content';

import QuoteCaptionBlock from './components/blocks/blockquotecaption';
import CaptionBlock from './components/blocks/caption';
import AtomicBlock from './components/blocks/atomic';
import TodoBlock from './components/blocks/todo';
import ImageBlock from './components/blocks/image';
import BreakBlock from './components/blocks/break';

import ImageSideButton from './components/sides/image';
import BreakSideButton from './components/sides/break';

if (__DEV__) {
  require('material-design-iconic-font/dist/css/material-design-iconic-font.css'); // eslint-disable-line global-require, max-len
}

export { Block, Inline, Entity } from './util/constants';
export { BLOCK_BUTTONS, INLINE_BUTTONS } from './components/toolbar';

export {
  getDefaultBlockData,
  getCurrentBlock,
  addNewBlock,
  resetBlockWithType,
  updateDataOfBlock,
  addNewBlockAt,
} from './model';

// eslint-disable-next-line no-undef
// export const _version = __VERSION__;

export {
  Editor,
  createEditorState,
  StringToTypeMap,
  RenderMap,
  Link,
  findLinkEntities,
  beforeInput,
  customStyleMap,
  keyBindingFn,
  rendererFn,
  QuoteCaptionBlock,
  CaptionBlock,
  AtomicBlock,
  TodoBlock,
  ImageBlock,
  BreakBlock,
  ImageSideButton,
  BreakSideButton,
};

export default Editor;
