import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function IntroDivider() {
    return (
        <Card variant="outlined" sx={{ maxWidth: 560 }}>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                    Əməliyyatların silinməsi
                    </Typography>
                  
                </Stack>
                <Typography color="text.secondary" variant="body2">
                Əməliyyatların silinməsini yerinə yetirsəniz, sistemə əlavə edilmiş Bron, Ticarət, Maliyyə, İstehsalat və Anbar sayımı əməliyyatlarının hamısı silinəcəkdir. Silinmiş məlumatların geri qaytarılması mümkün olmayacaq.
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
             {/*    <Typography gutterBottom variant="body2">
                    Select type
                </Typography> */}
                <Stack direction="row" spacing={1}>
                    <Button variant="outlined" color="error">
                       Əmıliyyatları sil
                    </Button>
                </Stack>
            </Box>
        </Card>
    );
}
