import { expect, test } from "@jest/globals";
import moment from "moment";
import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate sort by amount action object", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should generate sort by date action object", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should generate set text filter action object with text value", () => {
  const text = "This filter text";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("should generate set text filter action object with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
