import React, { useState, useEffect } from "react";
import { Button, Flex, TextInput } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";

const Field = () => {
  const sdk = useSDK();
  const [slug, setSlug] = useState(sdk.entry.fields.slug.getValue() || "");

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
  };

  const getFirstNonEmptyValue = (fields, fieldNames) => {
    for (const fieldName of fieldNames) {
      const value = fields[fieldName]?.getValue();
      if (value) {
        return value;
      }
    }
    return "";
  };

  const handleButtonClick = async () => {
    const fieldNames = ["pageName", "title", "plotTitle"];
    const pageName = getFirstNonEmptyValue(sdk.entry.fields, fieldNames);

    const newSlug = generateSlug(pageName);

    try {
      await sdk.entry.fields.slug.setValue(newSlug);
      setSlug(newSlug);
      sdk.notifier.success("Slug updated successfully!");
    } catch (error) {
      sdk.notifier.error("Error updating slug.");
      console.error("Error updating slug:", error);
    }
  };

  const handleInputChange = async (e) => {
    const newSlug = e.target.value;
    const sanitizedValue = newSlug
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove characters not matching [a-z0-9\s-]
      .replace(/\s+/g, "-") // Replace multiple spaces with single dash
      .replace(/-+/g, "-"); // Replace multiple dashes with single dash
    // .replace(/^-|-$/g, ""); // Remove leading and trailing dashes

    setSlug(sanitizedValue);

    try {
      await sdk.entry.fields.slug.setValue(sanitizedValue); // Use sanitizedValue for setting the slug
      // sdk.notifier.success("Slug updated successfully!");
    } catch (error) {
      sdk.notifier.error("Error updating slug.");
      console.error("Error updating slug:", error);
    }
  };

  useEffect(() => {
    const detach = sdk.entry.fields.slug.onValueChanged((value) => {
      setSlug(value);
    });
    return () => detach();
  }, [sdk]);

  return (
    <Flex alignItems="center" gap="spacingS">
      <TextInput
        name="slug"
        id="slug"
        value={slug}
        pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
        onChange={handleInputChange}
      />
      <Button
        onClick={handleButtonClick}
        variant="positive"
        style={{ backgroundColor: "#007bff", color: "#ffffff" }}
      >
        Generate Slug
      </Button>
    </Flex>
  );
};

export default Field;
