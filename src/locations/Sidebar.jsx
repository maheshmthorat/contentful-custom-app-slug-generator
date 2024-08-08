import React from 'react';
import {  Button } from '@contentful/f36-components';
import { useCMA, useSDK } from '@contentful/react-apps-toolkit';

const Sidebar = () => {
  const cma = useCMA();
  const sdk = useSDK();

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
  };


  const handleButtonClick = async () => {
    try {
      // Get the current entry
      const entry = await cma.entry.get({ entryId: sdk.entry.getSys().id });

      const title = entry.fields.title['en-US'];

      const slug = generateSlug(title);

      entry.fields.slug = {
        'en-US': slug,
      };

      // Update the entry
      await cma.entry.update({ entryId: entry.sys.id }, entry);

      sdk.notifier.success('Slug updated successfully!');
    } catch (error) {
      // Handle errors
      console.error('Error updating slug:', error);
      sdk.notifier.error('Error updating slug.');
    }
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Re-Generate Slug</Button>
    </div>
  );
};

export default Sidebar;
