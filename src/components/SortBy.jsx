import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../styles/sortby.css'

const SortBy = (props) => {
  const { setSearchParams, setSortByCriteria, setSortOrder, sortByCriteria, sortOrder } = props;

  const handleSortBy = (event) => {
    const value = event.target.value;
    setSortByCriteria(value);
    setSearchParams({ sort_by: value, order: sortOrder });
  };

  const handleOrderBy = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    setSearchParams({ sort_by: sortByCriteria, order: newOrder });
  };

  return (

    <div className='sortby-container'>


    <Box display="flex" alignItems="center" gap={2}>
      <FormControl variant="outlined" size="small">
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortByCriteria}
          onChange={handleSortBy}
          label="Sort By"
        >
          <MenuItem value="created_at">Date</MenuItem>
          <MenuItem value="comment_count">Comments</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        onClick={handleOrderBy}
        startIcon={sortOrder === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        size="small"
      >
        {sortOrder === 'asc' ? 'Asc' : 'Desc'}
      </Button>
    </Box>

    </div>
  );
};




export default SortBy