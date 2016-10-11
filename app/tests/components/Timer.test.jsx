var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('handleSetCountdown', () =>{
        it('should set state to started and count up', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetCountdown(0);

            expect(timer.state.count).toBe(0);
            expect(timer.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);
        });

        it('should pause timer on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetCountdown(3);
            timer.handleStatusChange('paused');

            setTimeout(() => {
                expect(timer.state.count).toBe(3);
                expect(timer.state.countdownStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop timer on stopped status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetCountdown(3);
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});