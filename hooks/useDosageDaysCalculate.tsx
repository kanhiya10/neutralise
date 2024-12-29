// import { useAppDispatch } from '@/redux/store';
// import { Add } from '@/redux/dosageInfo_Slice';
// import { format, addDays, parseISO } from 'date-fns';

// interface DosagePattern {
//   type: 'specific-days' | 'cyclic' | 'interval' | 'daily';
//   startDate: Date;
//   times: string[];
//   intakes: {
//     time: string;
//     dose: number;
//   }[];
// }

// interface EndDateResult {
//   endDate: string;
//   allDates: string[];
// }

// export const useDosageDaysCalculate = () => {
//   const dispatch = useAppDispatch();
  
//   const storeDosagePattern = (pattern: DosagePattern) => {
//     console.log('pattern',pattern);
//     return pattern;
//   };

//   const calculateEndDate = (pattern: DosagePattern, inventory: number): EndDateResult => {
//     const dates: string[] = [];
//     let currentDate = pattern.startDate;
//     let remainingInventory = inventory;
    
//     // Calculate total daily dose from all intakes
//     const dailyDose = pattern.intakes.reduce((total, intake) => total + intake.dose, 0);

//     // Generate dates until inventory is depleted
//     while (remainingInventory > 0) {
//       const formattedDate = format(currentDate, 'yyyy-MM-dd');
//       dates.push(formattedDate);
//       remainingInventory -= dailyDose;
//       currentDate = addDays(currentDate, 1);
//     }

//     return {
//       endDate: dates[dates.length - 1],
//       allDates: dates
//     };
//   };

//   const calculateAndDispatchLogs = (pattern: DosagePattern, inventory: number) => {
//     // First, calculate the end date and get all dates
//     const { allDates } = calculateEndDate(pattern, inventory);
    
//     // For each date in the range, create and dispatch logs
//     allDates.forEach(date => {
//       switch (pattern.type) {
//         case 'daily':
//           // Create a log for each intake time on this date
//           pattern.intakes.forEach(intake => {
//             dispatch(Add({
//               date,
//               log: {
//                 time: intake.time,
//                 dose: intake.dose,
//                 taken: false,
//                 medicationName: 'Med A' // You might want to get this from state or pass it as a parameter
//               }
//             }));
//           });
//           break;
          
//         // Add cases for other pattern types as needed
//         case 'specific-days':
//         case 'cyclic':
//         case 'interval':
//           // Implement logic for other pattern types
//           break;
//       }
//     });

//     return allDates;
//   };

//   return {
//     storeDosagePattern,
//     calculateEndDate,
//     calculateAndDispatchLogs
//   };
// };