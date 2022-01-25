import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ActivityList = (activities) => {
    
    const emptyActivity = {
        data: null,
    }

    
  return (<div>
      { activities === 'not set' || activities === null
                    ? <p>No activities added yet.</p>
                    :
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Actions/Practices/Habits</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
      }
  </div>
  )
};

export default ActivityList;
