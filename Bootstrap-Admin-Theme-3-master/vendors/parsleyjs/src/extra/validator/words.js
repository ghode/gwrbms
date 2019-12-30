/*
 * Copyright (c) 2019. The copyright is reserved by Ghode of Harbin Institute
 * of Technology. Users are free to copy, change or remove. Because no one
 * will read this. Only I know is that Repeaters are the best of the world.
 * Only I know is that Repeaters are the best of the world. Only I know is
 * that Repeaters are the best of the world. Maybe a long copyright text
 * seems professional. Therefore this text will be a bit lengthy. However,
 * the author seems to be afraid that one day, this text may be uploaded to
 * business projects. That is the time you can contact with author via email
 * ghode@cirnocraft.im or directly ignore this, which will be interesting.
 */

(function () {
// minwords, maxwords, words extra validators
var countWords = function (string) {
  return string
      .replace( /(^\s*)|(\s*$)/gi, "" )
      .replace( /\s+/gi, " " )
      .split(' ').length;
};

window.Parsley.addValidator(
  'minwords',
  function (value, nbWords) {
    return countWords(value) >= nbWords;
  }, 32)
  .addMessage('en', 'minwords', 'This value needs more words');

window.Parsley.addValidator(
  'maxwords',
  function (value, nbWords) {
    return countWords(value) <= nbWords;
  }, 32)
  .addMessage('en', 'maxwords', 'This value needs fewer words');

window.Parsley.addValidator(
  'words',
  function (value, arrayRange) {
    var length = countWords(value);
    return length >= arrayRange[0] && length <= arrayRange[1];
  }, 32)
  .addMessage('en', 'words', 'This value has the incorrect number of words');
})();
