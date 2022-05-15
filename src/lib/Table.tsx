import { ReactElement } from 'react';

interface MinTableItem {
  id: PrimitiveType;
}

type Columns<T extends MinTableItem> = Record<keyof T, string>;

export interface TableProps<T extends MinTableItem> {
  dataSource: T[];
  columns: Columns<T>;
  customRenderers?: CustomRenderers<T>;
}

type CustomRenderers<T extends MinTableItem> = Partial<
  Record<keyof T, (it: T) => React.ReactNode>
>;

function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

type PrimitiveType = string | Symbol | number | boolean;

// Type guard for the primitive types which will support printing
// out of the box

function isPrimitive(value: any): value is PrimitiveType {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'symbol'
  );
}

function Table<T extends MinTableItem>({
  dataSource,
  columns,
  customRenderers
}: TableProps<T>): ReactElement {
  const renderRow = (item: T) => {
    return (
      <tr className="bg-white border-b dark:bg-slate-50">
        {objectKeys(item).map((itemProperty) => {
          const customRenderer = customRenderers?.[itemProperty];

          if (customRenderer) {
            return <td>{customRenderer(item)}</td>;
          }

          return (
            <td className="p-2">
              {isPrimitive(item[itemProperty]) ? `${item[itemProperty]}` : ''}
            </td>
          );
        })}
      </tr>
    );
  };

  const renderColumns = (columns: Columns<T>) => {
    return objectValues(columns).map((column) => (
      <th scope="col" className="p-2">
        {column}
      </th>
    ));
  };

  return (
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-gray-700 uppercase bg-slate-200">
        {renderColumns(columns)}
      </thead>
      <tbody>{dataSource.map(renderRow)}</tbody>
    </table>
  );
}

export default Table;
