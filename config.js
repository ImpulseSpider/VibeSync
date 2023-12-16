module.exports = {
    app: {
        token: 'MTE4NTI3NjI0OTI3MTE4NTQwOA.GCivgE.ZUduyYiklI4-BqWGUwVl9MvWLwf6oxAniaMZMg',
        playing: 'by Impulse',
        global: false,
        guild: '780815226199081023',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
