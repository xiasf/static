let Action = require('./Action'),
    Pointer = require('../input/Pointer'),
    calc = require('../inc/calc');

class Track extends Action {
    /*
        Update input offset
    */
    onFrameStart(actor, frameDuration, framestamp) {
        actor.state.input = this.input.onFrame(framestamp);
        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
        this.frameDuration = frameDuration;
    }

    /*
        Move Value relative to Input movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process(actor, value, key) {
        var newValue = value.current;

        if (this.inputOffset.hasOwnProperty(key)) {
            newValue = (value.direct) ? this.input.current[key] : value.origin + (this.inputOffset[key] * value.amp);
        }

        return newValue;
    }

    /*
        Has this Action ended? 
        
        @return [boolean]: False to make user manually finish .track()
    */
    hasEnded() {
        return false;
    }

    deactivate() {
        super.deactivate();

        if (this.input && this.input.stop) {
            this.input.stop();
        }

        return this;
    }

    bindInput(input) {
        this.input = (!input.current) ? new Pointer(input) : input;
        this.inputOrigin = this.input.get();
    }

    getDefaultValue() {
        return {
            amp: 1,
            escapeAmp: 0,
            direct: false,
            smooth: 0
        };
    }
}

module.exports = Track;