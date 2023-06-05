import { formatDistance } from "date-fns";
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
    Cell: ({ value }) => formatDistance(new Date(), new Date(value)),
  },
];
