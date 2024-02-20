import axios from 'axios';
import { toast } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';

export {
  axios,
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
  toast,
  useForm,
};

export type { SubmitHandler };
