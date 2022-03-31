import { Button } from './Ui';
import { ContentGridSkeleton } from './Skeleton/ContentGrid';
import React from 'react';
interface PaginationButtonProps {
    isLoading?: boolean;
    children: string;
    fetchFunction: () => void;
}

export function PaginationButton({
    fetchFunction,
    isLoading,
    children
}: PaginationButtonProps) {
    return !isLoading ? (
        <Button
            secondary={'light'}
            onClick={fetchFunction}
            css={{
                '@mobile': {
                    width: '5.5rem',
                    height: '5.5rem',
                    borderRadius: '$circular',
                    background: '$grey900',
                    color: '$white',
                    padding: '$s1',
                    margin: 'auto $s1 auto 0',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    '& i': {
                        display: 'none'
                    }
                },
                '@sd': {
                    width: '9rem',
                    gridColumn: 'span 3',
                    margin: '$s3 auto 0'
                },
                '@lg': {
                    gridColumn: 'span 4'
                }
            }}
        >
            {children}
        </Button>
    ) : (
        <ContentGridSkeleton />
    );
}
