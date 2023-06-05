import {format} from "date-fns";
export const COLOUMNS = [
  {
    Header: "Author",
    accessor: "Author",
  },
  {
    Header: "Status",
    accessor: "Status",
  },
  {
    Header: "Date",
    accessor: "Issued",
    Cell: ({ value }) => format(new Date(value),'dd/MM/yyyy'),
  },
];
