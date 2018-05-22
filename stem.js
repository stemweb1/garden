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
                blockType: Scratch.BlockType.COMMAND,
                text: '说 [TEXT]',
                func: 'say',
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: '你好世界！'
                    }
                }
            },
        ],
    };
};

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 */
Stem.prototype.say = function (args) {
    console.log(args.TEXT);
};
