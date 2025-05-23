import { useState } from 'react'
import { Table, TableBody } from '@mui/material'
import DateWithAvatar from '@components/molecules/DateWithAvatar'
import TextWithChip from '@components/molecules/TextWithChip'
import AmountWithFiat from '@components/molecules/AmountWithFiat'
import SearchField from '@components/molecules/SearchField'
import type { TransactionTableProps } from '@utils/interface'
import { StyledTableContainer, StyledTableRow, StyledTableCell, TableWrapper, TopBar, TableRowStack, LeftContent,} from './styles'

const TransactionTable = ({ rows }: TransactionTableProps) => {
  const [query, setQuery] = useState('')

  const filteredRows = rows.filter(r => {
    const q = query.toLowerCase()
    return (
      r.details.title.toLowerCase().includes(q) ||
      r.details.subtitle.toLowerCase().includes(q)
    )
  })

  return (
    <TableWrapper>
      <TopBar>
        <SearchField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </TopBar>
      <StyledTableContainer>
        <Table>
          <TableBody>
            {filteredRows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell colSpan={2}>
                  <TableRowStack>
                    <LeftContent>
                      <DateWithAvatar {...row.date} />
                      <TextWithChip {...row.details} />
                    </LeftContent>
                    <AmountWithFiat {...row.amount} />
                  </TableRowStack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </TableWrapper>
  )
}

export default TransactionTable
