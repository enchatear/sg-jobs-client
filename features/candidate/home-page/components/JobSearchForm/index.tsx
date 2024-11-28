'use client';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  JobSearchFormFields,
  jobSearchFormSchema,
} from '@/features/candidate/home-page/components/JobSearchForm/config';
import styles from './_styles.module.scss';
import Field from '@/components/Field';
import SelectBox, { ListItem } from '@/components/SelectBox';
import Button from '@/components/Button';
import clsx from 'clsx';

const fakeJobsLocations: ListItem[] = [
  { key: 1, value: 'Kyiv' },
  { key: 2, value: 'Lviv' },
  { key: 3, value: 'Odesa' },
];

const fakeJobTypes: ListItem[] = [
  { key: 1, value: 'Full time' },
  { key: 2, value: 'Part time' },
  { key: 3, value: 'Remote' },
];

const JobSearchForm: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  const { register, handleSubmit, control, setValue } =
    useForm<JobSearchFormFields>({
      resolver: zodResolver(jobSearchFormSchema),
    });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit: SubmitHandler<JobSearchFormFields> = data => {
    console.log(data);
  };

  return isClient ? (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.search_form}>
      <Field
        {...register('title')}
        title="What?"
        titleClassName={styles.field_title}
        className={styles.field_container}
        fieldClassName={styles.first_field}
        placeholder="Job title, keyword..."
      />
      <Controller
        control={control}
        name="location"
        render={({ field }) => (
          <SelectBox
            list={fakeJobsLocations}
            selected={field.value}
            title="Where?"
            placeholder="Region"
            titleClassName={styles.field_title}
            className={styles.field_container}
            comboboxClassName={clsx(
              styles.search_combobox,
              styles.middle_field
            )}
            handleSelect={selected =>
              setValue('location', selected as ListItem<number>, {
                shouldDirty: true,
                shouldTouch: true,
              })
            }
          />
        )}
      />
      {window.innerWidth <= 768 ? (
        <div className={styles.type_container}>
          <div className={styles.fake_check}>
            <span>Part-time</span>
          </div>
          <div className={styles.fake_check}>
            <span>Full-time</span>
          </div>
        </div>
      ) : (
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <SelectBox
              list={fakeJobTypes}
              selected={field.value}
              title="What type?"
              placeholder="Type of job"
              titleClassName={styles.field_title}
              className={styles.field_container}
              comboboxClassName={styles.search_combobox}
              handleSelect={selected =>
                setValue('type', selected as ListItem<number>, {
                  shouldDirty: true,
                  shouldTouch: true,
                })
              }
            />
          )}
        />
      )}
      <Button className={styles.search_btn} icon="search">
        SEARCH
      </Button>
    </form>
  ) : null;
};

export default JobSearchForm;
