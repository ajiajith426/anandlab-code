import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiMaster = createApi({
    reducerPath: 'apiMaster',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        organs: builder.query({
            query: () => '/api/get-organs'
        }),
        banners: builder.query({
            query: () => `/public/api/banners`,
        }),
        conditions: builder.query({
            query: () => `/api/get-conditions`,
        }),
        testSlider: builder.query({
            query: ({ location, isPackage }) => `/public/api/topBookedTest/${location}/${isPackage}`,
        }),
        packageSlider: builder.query({
            query: ({ location, isPackage }) => `/public/api/topBookedTest/${location}/${isPackage}`,
        }),
        cities: builder.query({
            query: () => `/api/get-city-master`,
        }),
        news: builder.query({
            query() {
                return { url:`/api/newsAndEvents`, method: 'POST', }
            },
        }),
    })
})

export const { 
    useOrgansQuery,
    useBannersQuery,
    useConditionsQuery,
    useTestSliderQuery,
    usePackageSliderQuery,
    useCitiesQuery,
    useNewsQuery
} = apiMaster