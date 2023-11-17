import { useEffect } from 'react';
import { useState } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';
import { useNavigate } from 'react-router-dom';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const [categoryIdDelete, setCategoryIdDelete] = useState<number | undefined>();
  const { request } = useRequests();
  const  navigate  = useNavigate();
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setCategoriesFiltered([...categories]);
    } else {
      setCategoriesFiltered([
        ...categoriesFiltered.filter((category) =>
          category.name.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };

  const handleOnClickCategory = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  }

  const handleOpenModalDelete = (categoryId: number) => {
    setCategoryIdDelete(categoryId)
  }

  const handleCloseModalDelete = () => {
    setCategoryIdDelete(undefined)
  }

  const handleConfirmDeleteCategory = () => {
    setCategoryIdDelete(undefined)
  }

  return {
    categories: categoriesFiltered,
    openModalDelete: !!categoryIdDelete,
    handleOnChangeSearch,
    handleOnClickCategory,
    handleCloseModalDelete,
    handleOpenModalDelete,
    handleConfirmDeleteCategory,
  };
};
