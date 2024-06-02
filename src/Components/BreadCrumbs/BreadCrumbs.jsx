import React from 'react';
import PropTypes from 'prop-types';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

// Breadcrumb
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

const BreadCrumbs = ({ title, breadcrumbs }) => {
    return (
        <div className='card shadow border-0 w-100 flex-row p-4'>
            <h5 className="mb-0">{title}</h5>
            <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                {breadcrumbs.map((breadcrumb, index) => (
                    <StyledBreadcrumb
                        key={index}
                        component="a"
                        href={breadcrumb.href || '#'}
                        label={breadcrumb.label}
                        icon={breadcrumb.icon ? <HomeIcon fontSize="small" /> : null}
                    />
                ))}
            </Breadcrumbs>
        </div>
    );
};

BreadCrumbs.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
            icon: PropTypes.bool,
        })
    ).isRequired,
};

export default BreadCrumbs;
