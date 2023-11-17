import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const [categoryIdDelete, setCategoryIdDelete] = useState<number | undefined>();
  const { request } = useRequests();
  const navigate = useNavigate();
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
  };

  const handleOpenModalDelete = (categoryId: number) => {
    setCategoryIdDelete(categoryId);
  };

  const handleCloseModalDelete = () => {
    setCategoryIdDelete(undefined);
  };

  const handleConfirmDeleteCategory = async () => {
    await request(URL_CATEGORY_ID.replace('{categoryId}', `{categoryIdDeleted}`), MethodsEnum.DELETE, undefined, undefined, 'Categoria deletada com sucesso!')
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    setCategoryIdDelete(undefined);
  };
  

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
