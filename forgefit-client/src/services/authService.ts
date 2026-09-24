import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
} from '@/types/auth.types';

const TOKEN_KEY = 'forgefit_token';
const USER_KEY = 'forgefit_user';

// Mock user for offline frontend development (matches Spring Boot DTO)
const MOCK_USER: User = {
  id: 1,
  fullName: 'Alex Mercer',
  email: 'alex.mercer@forgefit.app',
  role: 'ROLE_USER',
  experience: 450,
  level: 8,
  isBanned: false,
};

export const authService = {
  /**
   * Log in user with email and password
   * NOTE: When Spring Boot backend is live, replace mock return with:
   * const response = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/login', credentials);
   * return response.data.data;
   */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    // Simulate network latency (400ms)
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!credentials.email || !credentials.password) {
      throw new Error('Email and password are required');
    }

    const mockResponse: AuthResponse = {
      token: 'mock-jwt-token-xyz-1234567890',
      user: {
        ...MOCK_USER,
        email: credentials.email,
        fullName: credentials.email.split('@')[0],
      },
    };

    localStorage.setItem(TOKEN_KEY, mockResponse.token);
    localStorage.setItem(USER_KEY, JSON.stringify(mockResponse.user));

    return mockResponse;
  },

  /**
   * Register a new user
   * NOTE: When Spring Boot backend is live, replace mock return with:
   * const response = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/register', data);
   * return response.data.data;
   */
  async register(data: RegisterRequest): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!data.email || !data.password || !data.fullName) {
      throw new Error('Full name, email, and password are required');
    }

    const mockResponse: AuthResponse = {
      token: 'mock-jwt-token-new-user-0987654321',
      user: {
        id: Math.floor(Math.random() * 1000) + 1,
        fullName: data.fullName,
        email: data.email,
        role: 'ROLE_USER',
        experience: 0,
        level: 1,
        isBanned: false,
      },
    };

    localStorage.setItem(TOKEN_KEY, mockResponse.token);
    localStorage.setItem(USER_KEY, JSON.stringify(mockResponse.user));

    return mockResponse;
  },

  /**
   * Log out user and clear storage
   */
  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  /**
   * Get stored JWT token
   */
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  /**
   * Get currently stored user
   */
  getStoredUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  },
};
