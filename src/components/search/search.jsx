import * as React from 'react';
import {Search} from 'baseui/icon';
import {Input} from 'baseui/input';


const SearchInput = () => {
    const [value, setValue] = React.useState("");
  return (
    <React.Fragment>
      <Input
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Search a picture"
        endEnhancer={<Search size="18px" />}
      />
    </React.Fragment>
  );
}

export default SearchInput