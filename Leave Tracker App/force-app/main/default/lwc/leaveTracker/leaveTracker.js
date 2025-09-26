import { api, LightningElement, wire } from 'lwc';

export default class LeaveTracker extends LightningElement {

    refreshLeaveReqeuestHandler(event) {
        this.refs.myLeavesComp.refreshGrid();
    }
}