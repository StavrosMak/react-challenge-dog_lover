import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import debounce from "lodash/debounce";
import './Search.css';

export default function Search({ breedList }) {
  const [searchItem, setSearchItem] = useState('');
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (query) => {
      setSearchItem(query.toLowerCase());
      setHelperText('');
      setError(false);
    }, []);

  const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);// eslint-disable-line react-hooks/exhaustive-deps

  const checkIfExists = () => {
    const query = searchItem;
    if (breedList.includes(query)) {
      setHelperText('');
      setError(false);
      navigate(`/breeds/${searchItem.toLowerCase()}`)
    } else {
      setHelperText('Not Found');
      setError(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkIfExists();
    }
  };

  return (
    <div className="Search">
      <div className="searchBox">
        <TextField
          className="searchField"
          label="Search"
          onChange={(e) => debouncedHandleSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          helperText={helperText || ''}
          error={error}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={checkIfExists}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
}
