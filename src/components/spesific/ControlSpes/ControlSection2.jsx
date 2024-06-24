import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Balanceofmoney, CostIcon, Debtreduction, Dynamics, Expenditure, Income, Increaseindebt, Marja, Profit } from '../../common/svg/allSvgComponents';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



let myArData = [
    {
        nameh1:"Ticarət göstəricisi",
        price1:100,
        name1:"Maya dəyəri",
        icon1:<CostIcon/>,
        price2:150,
        name2:"Mənfəət",
        icon2:<Profit/>,
        percentage:10,
        name3:"Marja",
        icon3:<Marja/>

    },
    {
        nameh1:"DB borc göstəriciləri",
        price1:100,
        name1:"Borcun azalmas",
        icon1:<Increaseindebt/>,
        price2:150,
        name2:"Borcun artması",
        icon2:<Debtreduction/>,
        percentage:10,
        name3:"Dinamika",
        icon3:<Dynamics/>

    },
    {
        nameh1:"KD borc göstəriciləri",
        price1:100,
        name1:"Borcun azalmas",
        icon1:<Increaseindebt/>,
        price2:150,
        name2:"Borcun artması",
        icon2:<Debtreduction/>,
        percentage:10,
        name3:"Dinamika",
        icon3:<Dynamics/>

    },
    {
        nameh1:"Maliyyə göstəriciləri",
        price1:100,
        name1:"Pul qalığı",
        icon1:<Balanceofmoney/>,
        price2:150,
        name2:"Mədaxil",
        icon2:<Income/>,
        percentage:10,
        name3:"Məxaric",
        icon3:<Expenditure/>

    },
]


export default function ResponsiveGrid2() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {myArData.map((item, index) => (
                    <Grid item xs={2} sm={3} md={3} key={index}>
                        <Item className='flex flex-col gap-3'>
                            <h3>{item.nameh1}</h3>
                            <hr />
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-start flex-col gap-1'>
                                    <span className='text-red-600 text-2xl'>{item.price1} AZN</span>
                                    <span>{item.name1}</span>
                                </div>
                               {item.icon1}
                            </div>
                            <div className='flex items-center justify-between  mb-2'>
                                <div className='flex items-start flex-col gap-1'>
                                    <span className='text-red-600 text-2xl'>{item.price2} AZN</span>
                                    <span>{item.name2}</span>
                                </div>
                               {item.icon2}
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-start flex-col gap-1'>
                                    <span className='text-red-600 text-2xl'>{item.percentage} %</span>
                                    <span>{item.name3}</span>
                                </div>
                               {item.icon3}
                            </div>

                        </Item>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}