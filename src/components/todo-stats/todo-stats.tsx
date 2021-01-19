import React from 'react';
import { useStats } from '../../state';

function TodoStats() {
    const { nTotal, nCompleted, nUncompleted, percentCompleted } = useStats();

    return (
        <div>
            <p>Total items: {nTotal}</p>
            <p>Items completed: {nCompleted}</p>
            <p>Items not completed: {nUncompleted}</p>
            <p>Percent completed: {percentCompleted}%</p>
        </div>
    );
}

export default TodoStats;