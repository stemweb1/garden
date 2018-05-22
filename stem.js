var Stem = function () {
};

/**
 * @return {object} This extension's metadata.
 */
Stem.prototype.getInfo = function () {
    return {
        id: 'stem',

        name: '语音与智能',

        blocks: [
            {
                opcode: 'stem-say',
                blockType: 'command',
                text: '说 [TEXT]',
                func: 'say',
                arguments: {
                    TEXT: {
                        type: 'string',
                        default: '你好世界！'
                    }
                }
            },
        ],
    };
};

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {string} MY_ARG - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 */
Stem.prototype.say = function (args) {
    console.log(args.TEXT);
};