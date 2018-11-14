import React from 'react';

import Aux from '../../hoc';
import classes from './Attendance.css';
import Input from '../../components/UI/Input';

class Attendance extends React.Component {
  render() {
    const elementConfig = {
      type: 'radio',
      placeholder: "date"
    }
    const current_date = new Date().toLocaleString();

    return (
      <Aux>
        <div className={classes.mainSec}>
          <div className={classes.topSec}>
            <div>
              <div className={classes.selectSec}>
                <label className={classes.label} htmlFor="classAttendance">Class Attendance</label>
                <input type="radio" name="attendance" id="classAttendance"/>
              </div>
              <div className={classes.selectSec}>
                <label className={classes.label} htmlFor="subjectAttendance">Subject Attendance</label>
                <input type="radio" name="attendance" id="subjectAttendance"/>
              </div>
            </div>

            <div className={classes.selectSec} style={{border:'none'}}>
              <label className={classes.label}>Select Class/Batch</label>
              <select>
                <option value="">---select class/batch---</option>
                <option value="1">class1</option>
                <option value="2">class2</option>
                <option value="3">class3</option>
              </select>
            </div>
            <div className={classes.selectSec} style={{border:'none'}}>
              <label className={classes.label}>Current Date</label>
              <span>{current_date}</span>
            </div>
          </div>
          <div className={classes.bottomSec}>
            <table>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Attendance</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Ankit</td>
                <td>P</td>
              </tr>
              <tr>
                <td>2</td>
                <td>John</td>
                <td>A</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark</td>
                <td>P</td>
              </tr>
            </table>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Attendance;
