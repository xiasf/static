const Controls = require('../../controls/Controls');

class TweenControls extends Controls {
    restart() {
        this.restoreOrigins();
        this.action.restart();
        return this;
    }

    reverse() {
        this.restoreOrigins();
        this.action.reverse();
        return this;
    }

    seek(progress) {
        if (!this.actor.hasAction(this.id)) {
            this.start().pause();
        }

        this.action.elapsed = this.action.duration * progress;

        if (!this.action.isActive) {
            this.action.activate();
            this.actor.process.fire();
            this.action.deactivate();
        }

        return this;
    }
}

module.exports = TweenControls;