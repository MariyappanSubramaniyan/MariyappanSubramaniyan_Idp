import { StyledSearch } from './styles'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import { SEARCH_LABEL } from '@utils/constants'
import type { SearchFieldProps } from '@utils/interface'

const SearchField = ({ value, onChange }: SearchFieldProps) => (
  <StyledSearch value={value} onChange={onChange} placeholder={SEARCH_LABEL}
    endAdornment={
      <InputAdornment position="end">
        <SearchIcon />
      </InputAdornment>
    }
    />
)

export default SearchField
