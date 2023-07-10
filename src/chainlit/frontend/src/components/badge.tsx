import { useRecoilValue } from 'recoil';

import { Box, Button, Tooltip } from '@mui/material';

import { projectSettingsState } from 'state/project';

import { Logo } from './logo';

export default function Badge() {
  const pSettings = useRecoilValue(projectSettingsState);

  if (!pSettings?.prod) return null;

  return (
    <Box
      sx={{
        zIndex: '50',
        position: 'fixed',
        bottom: '0',
        right: '0'
      }}
    >
      <Tooltip title="Hosted with Chainlit">
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: 4
          }}
        >
          <Logo />
        </Button>
      </Tooltip>
    </Box>
  );
}
