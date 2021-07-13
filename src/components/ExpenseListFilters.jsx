import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
  resetDateFilter,
} from "../actions/filters";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

export class ExpenseListFilters extends React.Component {
  onFromDateChange = (startDate) => {
    this.props.setStartDate(startDate);
  };
  onToDateChange = (endDate) => {
    this.props.setEndDate(endDate);
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  onResetDateFilter = (e) => {
    this.props.resetDateFilter();
  };

  render() {
    let startDate = parseDate(this.props.filters.startDate);
    let endDate = parseDate(this.props.filters.endDate);
    const modifiers = {
      start: startDate,
      end: endDate,
    };
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DayPickerInput
          format="DD-MM-YYYY"
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={formatDate(startDate, "DD-MM-YYYY")}
          dayPickerProps={{
            selectedDays: [startDate, endDate],
            disabledDays: { after: parseDate(endDate) },
            modifiers,
            toMonth: parseDate(endDate),
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.onFromDateChange}
        />{" "}
        -{" "}
        <DayPickerInput
          ref={(e) => (this.to = e)}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={formatDate(endDate, "DD-MM-YYYY")}
          onDayChange={this.onToDateChange}
          dayPickerProps={{
            selectedDays: [startDate, endDate],
            disabledDays: { before: parseDate(startDate) },
            modifiers,
            fromMonth: parseDate(startDate),
          }}
        />
        <button onClick={this.onResetDateFilter}>x</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  resetDateFilter: () => dispatch(resetDateFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
