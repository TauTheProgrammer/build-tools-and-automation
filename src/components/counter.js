import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export default class Counter extends Component {
    state = {
        count: 0
    };

    /********************************
     * React API
     ********************************/

    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <Button>Increment</Button>
            </React.Fragment>
        );
    }

    /********************************
     * API
     ********************************/

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
