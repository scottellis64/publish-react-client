import React, { useContext, createContext, useState, forwardRef } from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

const QbsContext = createContext();

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

const tableIcons = {
   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
   DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
   PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const qbsColumns = [
   { title: "First Name", field: "name" },
   { title: "Last Name", field: "surname" },
   { title: "Year of Birth", field: "birthYear", type: "numeric" },
   {
      title: "City of Birth",
      field: "birthCity",
      lookup: {
         34: 'Haughton',
         63: 'San Diego',
         88: 'Henryetta',
         90: 'Mount Vernon',
         91: 'Chicago',
         92: 'Dallas',
         93: 'Campbell',
         94: 'Cincinatti',
         95: 'Mesa',
         89: 'San Rafael'
      }
   }
];

const qbData = [
   { name: "Dak", surname: "Prescott", birthYear: 1993, birthCity: 34 }
];

const addData = [
   { name: "Danny", surname: "White", birthYear: 1952, birthCity: 95 },
   { name: "Roger", surname: "Staubach", birthYear: 1942, birthCity: 94 },
   { name: "Jerry", surname: "Rhome", birthYear: 1942, birthCity: 92 },
   { name: "Craig", surname: "Morton", birthYear: 1943, birthCity: 93 },
   { name: "John", surname: "Roach", birthYear: 1933, birthCity: 92 },
   { name: "Don", surname: "Heinrich", birthYear: 1948, birthCity: 91 },
   { name: "Don", surname: "Meredith", birthYear: 1938, birthCity: 90 },
   { name: "Edward", surname: "LeBaron", birthYear: 1930, birthCity: 89 },
   { name: "Troy", surname: "Aikman", birthYear: 1966, birthCity: 88 },
   { name: "Tony", surname: "Romo", birthYear: 1980, birthCity: 63 }
];

let qbIndex = 0;

const QbsComponent = () => {
   const { qbs, addRow } = useContext(QbsContext);

   return (
      <div>
         <MaterialTable
            icons={tableIcons}
            columns={qbsColumns}
            data={qbs}
            title="Dallas Cowboys Quarterbacks"
         />

         <Button onClick={() => addRow()}>Add Row</Button>
      </div>
   )
};

const Qbs = () => {
   const [qbs, setQbs] = useState(qbData);

   const addRow = () => {
      setQbs([...qbs, addData[qbIndex++]]);
   };

   return (
      <div>
         <QbsContext.Provider value={{ qbs, addRow }}>
            <QbsComponent />
         </QbsContext.Provider>
      </div>
   );
};

export default Qbs;
