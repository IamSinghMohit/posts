import React, { useMemo } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import { COLOUMNS } from "./CurrentColoumns";
import CurrentData from "./CurrentData.json";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function RentStatus() {
  const columns = useMemo(() => COLOUMNS, []);
  const data = useMemo(() => CurrentData, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  return (
    <div className="flex gap-4">
      <div
        className="put-shadow bg-gray-600 rounded-lg flex h-full items-center flex-col gap-2"
        style={{ flex: 1 }}
      >
        <img src="/person.png" alt="person" className="w-[90px] m-3 " />
        <span className="text-gray-950">Thi is the name of the person</span>
        <p className="text-gray-950 mb-3">
          Today : <span className="text-white font-bold">21</span>{" "}
        </p>
      </div>

      <div
        style={{ flex: 3 }}
        className="put-shadow bg-gray-600 rounded-lg p-5 h-[320px]"
      >
        <div className="text-black my-2 ">
          <input
            type="text"
            value={state.globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="border-2 bg-transparent outline-none border-none"
            style={{ borderBottom: "1px solid white" }}
          />
        </div>

        <div className="overflow-y-scroll h-[253px] w-full rounded-s ">
          <table
            className="table-fixed border-collapse border-white w-full"
            {...getTableProps()}
          >
            <thead
              className="sticky top-0 
                  before:content-[''] before:w-full before:border-2 before:absolute before:bg-white before:-left-0 before:-top-[1px]
                  after:content-[''] after:w-full after:border-2 after:absolute after:bg-white after:-left-0 after:-bottom-[1px]"
            >
              {headerGroups.map((header) => (
                <tr {...header.getHeaderGroupProps()}>
                  {header.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="border-2 p-2 bg-gray-300 text-black"
                    >
                      {column.render("Header")}

                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <FaArrowDown />
                          ) : (
                            <FaArrowUp />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="" {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps}>
                    {row.cells.map((cell) => {
                      let statusClass = "";
                      if (cell.column.id === "Status") {
                        const status = cell.value.toLowerCase();
                        if (status === "completed") {
                          statusClass = "bg-green-300";
                        } else if (status === "pending") {
                          statusClass = "bg-yellow-300";
                        }
                      }
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={`border-2 p-2 text-center ${statusClass}`}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RentStatus;
