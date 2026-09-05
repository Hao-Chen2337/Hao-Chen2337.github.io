window.DECK_DATA = {
 "caliber": {
  "commit": "0177dcc73",
  "bench": {
   "args": "-p 128 -n 128 -t 8",
   "general_ghz": 2.0,
   "ai_ghz": 1.8,
   "source": "bash/model_result.txt"
  },
  "official_tcm": {
   "general_ghz": 2.4,
   "ai_ghz": 2.0,
   "source": "TCM/doc_5model_bench.txt"
  },
  "sources": [
   "bash/model_result.txt",
   "bash/profile_result.txt",
   "bash/correctness_result.txt",
   "bash/perf_result.txt"
  ]
 },
 "profile": {
  "spacemit": {
   "x100": {
    "buckets": {
     "gemm": 73.3,
     "attn": 5.9,
     "repack": 0.9,
     "ops": 1.9,
     "thread": 6.3,
     "misc": 0.1
    },
    "top": [
     {
      "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
      "pct": 216.6,
      "n": 13
     },
     {
      "sym": "BLK_LOOP1629",
      "pct": 132.8,
      "n": 3
     },
     {
      "sym": "BLK_LOOP1736",
      "pct": 126.9,
      "n": 8
     },
     {
      "sym": "BLK_LOOP825",
      "pct": 110.6,
      "n": 6
     },
     {
      "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
      "pct": 72.8,
      "n": 12
     },
     {
      "sym": "BLK_LPST1494",
      "pct": 62.7,
      "n": 3
     },
     {
      "sym": "_K_LPST654",
      "pct": 60.2,
      "n": 4
     },
     {
      "sym": "K64_LPST577",
      "pct": 48.1,
      "n": 2
     }
    ],
    "ipc": 0.312,
    "backend": 77.7,
    "frontend": 2.2,
    "kernels": [],
    "n_models": 13
   },
   "a100": {
    "buckets": {
     "gemm": 70.0,
     "attn": 5.7,
     "repack": 4.8,
     "ops": 1.6,
     "thread": 5.3,
     "misc": 0.1
    },
    "top": [
     {
      "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
      "pct": 205.5,
      "n": 13
     },
     {
      "sym": "BLK_LOOP1629",
      "pct": 130.1,
      "n": 3
     },
     {
      "sym": "BLK_LOOP1736",
      "pct": 120.0,
      "n": 8
     },
     {
      "sym": "BLK_LOOP825",
      "pct": 104.7,
      "n": 6
     },
     {
      "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
      "pct": 70.2,
      "n": 12
     },
     {
      "sym": "BLK_LPST1494",
      "pct": 62.3,
      "n": 3
     },
     {
      "sym": "_K_LPST654",
      "pct": 57.2,
      "n": 4
     },
     {
      "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
      "pct": 54.2,
      "n": 9
     }
    ],
    "ipc": 0.298,
    "backend": 76.8,
    "frontend": 1.6,
    "kernels": [],
    "n_models": 13
   }
  },
  "plain-repack": {
   "x100": {
    "buckets": {
     "vec_dot": 81.3,
     "attn": 2.2,
     "repack": 0.0,
     "ops": 0.3,
     "thread": 5.6,
     "misc": 8.3
    },
    "top": [
     {
      "sym": "ggml_vec_dot_q5_0_q8_0",
      "pct": 270.2,
      "n": 3
     },
     {
      "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
      "pct": 266.8,
      "n": 12
     },
     {
      "sym": "ggml_vec_dot_q3_K_q8_K_vl256",
      "pct": 120.9,
      "n": 2
     },
     {
      "sym": "ggml_gemm_q4_K_16x1_q8_K",
      "pct": 110.7,
      "n": 5
     },
     {
      "sym": "ggml_gemm_q8_0_16x1_q8_0",
      "pct": 101.6,
      "n": 2
     },
     {
      "sym": "ggml_vec_dot_q5_K_q8_K",
      "pct": 90.1,
      "n": 2
     },
     {
      "sym": "ggml_gemm_q4_0_16x1_q8_0",
      "pct": 53.5,
      "n": 1
     },
     {
      "sym": "ggml_gemv_q8_0_16x1_q8_0",
      "pct": 39.5,
      "n": 3
     }
    ],
    "ipc": 1.031,
    "backend": 23.3,
    "frontend": 69.7,
    "kernels": [],
    "n_models": 13
   },
   "a100": {
    "buckets": {
     "vec_dot": 98.5,
     "attn": 0.4,
     "ops": 0.1,
     "thread": 0.4,
     "misc": 0.3
    },
    "top": [
     {
      "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
      "pct": 337.0,
      "n": 6
     },
     {
      "sym": "ggml_vec_dot_q5_0_q8_0",
      "pct": 276.3,
      "n": 3
     },
     {
      "sym": "ggml_vec_dot_q8_0_q8_0",
      "pct": 190.7,
      "n": 3
     },
     {
      "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
      "pct": 140.1,
      "n": 12
     },
     {
      "sym": "ggml_vec_dot_q5_K_q8_K",
      "pct": 99.9,
      "n": 2
     },
     {
      "sym": "ggml_vec_dot_q4_0_q8_0",
      "pct": 95.9,
      "n": 1
     },
     {
      "sym": "ggml_vec_dot_q2_K_q8_K_vl256",
      "pct": 80.2,
      "n": 1
     },
     {
      "sym": "ggml_vec_dot_q3_K_q8_K_vl1024",
      "pct": 56.1,
      "n": 2
     }
    ],
    "ipc": 0.168,
    "backend": 88.1,
    "frontend": 0.3,
    "kernels": [],
    "n_models": 13
   }
  },
  "plain-norepack": {
   "x100": {
    "buckets": {
     "vec_dot": 93.7,
     "attn": 1.4,
     "ops": 0.2,
     "thread": 2.6,
     "misc": 0.7
    },
    "top": [
     {
      "sym": "ggml_vec_dot_q5_0_q8_0",
      "pct": 266.7,
      "n": 3
     },
     {
      "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
      "pct": 243.4,
      "n": 6
     },
     {
      "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
      "pct": 201.6,
      "n": 12
     },
     {
      "sym": "ggml_vec_dot_q8_0_q8_0",
      "pct": 168.0,
      "n": 3
     },
     {
      "sym": "ggml_vec_dot_q4_0_q8_0",
      "pct": 93.5,
      "n": 1
     },
     {
      "sym": "ggml_vec_dot_q5_K_q8_K",
      "pct": 89.7,
      "n": 2
     },
     {
      "sym": "ggml_vec_dot_q3_K_q8_K_vl256",
      "pct": 89.4,
      "n": 2
     },
     {
      "sym": "ggml_vec_dot_q2_K_q8_K_vl256",
      "pct": 62.7,
      "n": 1
     }
    ],
    "ipc": 0.877,
    "backend": 17.6,
    "frontend": 75.2,
    "kernels": [],
    "n_models": 13
   },
   "a100": {
    "buckets": {
     "vec_dot": 98.5,
     "attn": 0.4,
     "ops": 0.1,
     "thread": 0.4,
     "misc": 0.3
    },
    "top": [
     {
      "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
      "pct": 336.6,
      "n": 6
     },
     {
      "sym": "ggml_vec_dot_q5_0_q8_0",
      "pct": 276.3,
      "n": 3
     },
     {
      "sym": "ggml_vec_dot_q8_0_q8_0",
      "pct": 190.6,
      "n": 3
     },
     {
      "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
      "pct": 140.2,
      "n": 12
     },
     {
      "sym": "ggml_vec_dot_q5_K_q8_K",
      "pct": 99.9,
      "n": 2
     },
     {
      "sym": "ggml_vec_dot_q4_0_q8_0",
      "pct": 96.0,
      "n": 1
     },
     {
      "sym": "ggml_vec_dot_q2_K_q8_K_vl256",
      "pct": 80.2,
      "n": 1
     },
     {
      "sym": "ggml_vec_dot_q3_K_q8_K_vl1024",
      "pct": 56.1,
      "n": 2
     }
    ],
    "ipc": 0.17,
    "backend": 88.1,
    "frontend": 0.2,
    "kernels": [],
    "n_models": 13
   }
  }
 },
 "profile_models": {
  "spacemit": {
   "gemma-3-4b": {
    "x100": {
     "top": [
      {
       "sym": "BLK_LOOP825",
       "pct": 31.65
      },
      {
       "sym": "_K_LPST654",
       "pct": 19.17
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 14.22
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 7.6
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 4.32
      },
      {
       "sym": "ggml_compute_forward_glu",
       "pct": 4.28
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.96
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 2.65
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 2.1
      }
     ],
     "ipc": 0.35,
     "frontend": 1.99,
     "backend": 76.04,
     "buckets": {
      "gemm": 72.6,
      "attn": 4.3,
      "repack": 2.1,
      "ops": 6.9,
      "thread": 4.0
     }
    },
    "a100": {
     "top": [
      {
       "sym": "BLK_LOOP825",
       "pct": 29.85
      },
      {
       "sym": "_K_LPST654",
       "pct": 18.14
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 13.39
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 7.17
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 6.13
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 4.11
      },
      {
       "sym": "ggml_compute_forward_glu",
       "pct": 4.02
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.75
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 2.5
      }
     ],
     "ipc": 0.34,
     "frontend": 1.1,
     "backend": 74.88,
     "buckets": {
      "gemm": 68.5,
      "attn": 4.1,
      "repack": 6.1,
      "ops": 6.5,
      "thread": 3.8
     }
    }
   },
   "prem-1b": {
    "x100": {
     "top": [
      {
       "sym": "BLK_LOOP1629",
       "pct": 48.14
      },
      {
       "sym": "BLK_LPST1494",
       "pct": 22.53
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 9.71
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.21
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 2.48
      },
      {
       "sym": "END5176",
       "pct": 2.16
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.59
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.57
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 1.53
      }
     ],
     "ipc": 0.3,
     "frontend": 1.42,
     "backend": 77.13,
     "buckets": {
      "gemm": 75.3,
      "attn": 9.7,
      "ops": 1.5,
      "thread": 6.4
     }
    },
    "a100": {
     "top": [
      {
       "sym": "BLK_LOOP1629",
       "pct": 47.29
      },
      {
       "sym": "BLK_LPST1494",
       "pct": 22.19
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 9.74
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.24
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 2.43
      },
      {
       "sym": "END5176",
       "pct": 2.21
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.6
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.59
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 1.52
      }
     ],
     "ipc": 0.29,
     "frontend": 1.29,
     "backend": 76.89,
     "buckets": {
      "gemm": 74.1,
      "attn": 9.7,
      "ops": 1.5,
      "thread": 6.4
     }
    }
   },
   "q0.5B-Q4_K": {
    "x100": {
     "top": [
      {
       "sym": "BLK_LOOP1629",
       "pct": 26.33
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 15.12
      },
      {
       "sym": "BLK_LPST1494",
       "pct": 11.83
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 9.89
      },
      {
       "sym": "0x000000000001e956",
       "pct": 5.45
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 4.46
      },
      {
       "sym": "BLK_LOOP825",
       "pct": 3.95
      },
      {
       "sym": "0x000000000001e950",
       "pct": 2.75
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 2.71
      }
     ],
     "ipc": 0.33,
     "frontend": 3.25,
     "backend": 75.16,
     "buckets": {
      "gemm": 61.7,
      "attn": 9.9,
      "thread": 10.9
     }
    },
    "a100": {
     "top": [
      {
       "sym": "BLK_LOOP1629",
       "pct": 25.45
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 14.28
      },
      {
       "sym": "BLK_LPST1494",
       "pct": 11.89
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 9.51
      },
      {
       "sym": "0x000000000001e956",
       "pct": 5.54
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 4.3
      },
      {
       "sym": "BLK_LOOP825",
       "pct": 3.81
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 2.79
      },
      {
       "sym": "0x000000000001e950",
       "pct": 2.74
      }
     ],
     "ipc": 0.32,
     "frontend": 2.21,
     "backend": 74.85,
     "buckets": {
      "gemm": 59.7,
      "attn": 9.5,
      "thread": 11.1
     }
    }
   },
   "q0.5B-Q6_K": {
    "x100": {
     "top": [
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 35.16
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 27.25
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 9.79
      },
      {
       "sym": "0x000000000001e956",
       "pct": 5.81
      },
      {
       "sym": "0x000000000001e950",
       "pct": 2.93
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 2.93
      },
      {
       "sym": "END5176",
       "pct": 2.08
      },
      {
       "sym": "spacemit_kernels::rvv::quantize_a_4row_i8(unsigned",
       "pct": 1.89
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 1.65
      }
     ],
     "ipc": 0.29,
     "frontend": 2.74,
     "backend": 78.51,
     "buckets": {
      "gemm": 64.5,
      "attn": 9.8,
      "ops": 3.5,
      "thread": 11.7
     }
    },
    "a100": {
     "top": [
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 34.24
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 26.19
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 9.32
      },
      {
       "sym": "0x000000000001e956",
       "pct": 5.92
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 3.77
      },
      {
       "sym": "0x000000000001e950",
       "pct": 2.95
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 2.94
      },
      {
       "sym": "END5176",
       "pct": 2.05
      },
      {
       "sym": "spacemit_kernels::rvv::quantize_a_4row_i8(unsigned",
       "pct": 1.81
      }
     ],
     "ipc": 0.28,
     "frontend": 2.31,
     "backend": 77.83,
     "buckets": {
      "gemm": 62.5,
      "attn": 9.3,
      "repack": 3.8,
      "ops": 1.8,
      "thread": 11.8
     }
    }
   },
   "q1.5b-q2_k": {
    "x100": {
     "top": [
      {
       "sym": "INNER_K_LOOP419",
       "pct": 20.8
      },
      {
       "sym": "K64_LPST577",
       "pct": 18.99
      },
      {
       "sym": "INNER_K_LOOP357",
       "pct": 12.24
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 9.87
      },
      {
       "sym": "K64_LPST498",
       "pct": 5.2
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 5.19
      },
      {
       "sym": "0x000000000001e956",
       "pct": 4.17
      },
      {
       "sym": "END5176",
       "pct": 2.09
      },
      {
       "sym": "0x000000000001e950",
       "pct": 2.05
      }
     ],
     "ipc": 0.4,
     "frontend": 2.49,
     "backend": 73.03,
     "buckets": {
      "gemm": 69.2,
      "attn": 5.2,
      "thread": 6.2
     }
    },
    "a100": {
     "top": [
      {
       "sym": "INNER_K_LOOP419",
       "pct": 19.8
      },
      {
       "sym": "K64_LPST577",
       "pct": 18.1
      },
      {
       "sym": "INNER_K_LOOP357",
       "pct": 11.76
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 9.32
      },
      {
       "sym": "K64_LPST498",
       "pct": 5.02
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 4.89
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 4.21
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.93
      },
      {
       "sym": "END5176",
       "pct": 2.05
      }
     ],
     "ipc": 0.38,
     "frontend": 2.01,
     "backend": 71.18,
     "buckets": {
      "gemm": 66.0,
      "attn": 4.9,
      "repack": 4.2,
      "thread": 3.9
     }
    }
   },
   "q1.5b-q3_k": {
    "x100": {
     "top": [
      {
       "sym": "K64_LPST577",
       "pct": 29.1
      },
      {
       "sym": "BLK_LOOP825",
       "pct": 15.64
      },
      {
       "sym": "K64_LPST498",
       "pct": 8.85
      },
      {
       "sym": "_K_LPST654",
       "pct": 8.82
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 8.19
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 4.25
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.44
      },
      {
       "sym": "K64_LPND498",
       "pct": 1.92
      },
      {
       "sym": "END5176",
       "pct": 1.81
      }
     ],
     "ipc": 0.38,
     "frontend": 2.42,
     "backend": 74.94,
     "buckets": {
      "gemm": 74.3,
      "attn": 4.2,
      "thread": 3.4
     }
    },
    "a100": {
     "top": [
      {
       "sym": "K64_LPST577",
       "pct": 27.87
      },
      {
       "sym": "BLK_LOOP825",
       "pct": 14.97
      },
      {
       "sym": "K64_LPST498",
       "pct": 8.47
      },
      {
       "sym": "_K_LPST654",
       "pct": 8.46
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 7.84
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 4.05
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 3.51
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.28
      },
      {
       "sym": "repack_q3_k_to_q3_k_32_bl(ggml_tensor*,",
       "pct": 1.88
      }
     ],
     "ipc": 0.36,
     "frontend": 1.65,
     "backend": 73.57,
     "buckets": {
      "gemm": 67.6,
      "attn": 4.0,
      "repack": 5.4,
      "thread": 3.3
     }
    }
   },
   "q1.5b-q4_k": {
    "x100": {
     "top": [
      {
       "sym": "BLK_LOOP825",
       "pct": 34.19
      },
      {
       "sym": "_K_LPST654",
       "pct": 19.42
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 14.23
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 6.7
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 3.99
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.68
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 2.14
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.85
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.84
      }
     ],
     "ipc": 0.32,
     "frontend": 2.49,
     "backend": 77.88,
     "buckets": {
      "gemm": 74.5,
      "attn": 4.0,
      "repack": 2.1,
      "thread": 7.4
     }
    },
    "a100": {
     "top": [
      {
       "sym": "BLK_LOOP825",
       "pct": 32.21
      },
      {
       "sym": "_K_LPST654",
       "pct": 18.61
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 13.36
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 6.41
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 6.12
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 3.81
      },
      {
       "sym": "0x000000000001e956",
       "pct": 3.35
      },
      {
       "sym": "repack_q4_k_to_q4_1_32_bl(ggml_tensor*,",
       "pct": 2.58
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.69
      }
     ],
     "ipc": 0.3,
     "frontend": 1.46,
     "backend": 76.6,
     "buckets": {
      "gemm": 70.6,
      "attn": 3.8,
      "repack": 8.7,
      "thread": 5.0
     }
    }
   },
   "q1.5b-q5_k": {
    "x100": {
     "top": [
      {
       "sym": "BLK_LOOP1559",
       "pct": 43.92
      },
      {
       "sym": "BLK_LPST1415",
       "pct": 18.95
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 11.37
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 5.56
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 3.22
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.8
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 1.72
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.41
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.41
      }
     ],
     "ipc": 0.3,
     "frontend": 2.13,
     "backend": 78.39,
     "buckets": {
      "gemm": 79.8,
      "attn": 3.2,
      "repack": 1.7,
      "thread": 5.6
     }
    },
    "a100": {
     "top": [
      {
       "sym": "BLK_LOOP1559",
       "pct": 41.8
      },
      {
       "sym": "BLK_LPST1415",
       "pct": 17.96
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 10.83
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 5.27
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 4.97
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 3.07
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.81
      },
      {
       "sym": "repack_q5_k_to_q5_1_32_bl(ggml_tensor*,",
       "pct": 1.69
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.42
      }
     ],
     "ipc": 0.29,
     "frontend": 1.28,
     "backend": 77.28,
     "buckets": {
      "gemm": 75.9,
      "attn": 3.1,
      "repack": 6.7,
      "thread": 4.2
     }
    }
   },
   "q1.5b-q6_k": {
    "x100": {
     "top": [
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 41.05
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 34.77
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 6.3
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 3.31
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.73
      },
      {
       "sym": "END5176",
       "pct": 1.41
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.39
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.37
      },
      {
       "sym": "spacemit_kernels::rvv::quantize_a_4row_i8(unsigned",
       "pct": 1.33
      }
     ],
     "ipc": 0.29,
     "frontend": 2.88,
     "backend": 81.88,
     "buckets": {
      "gemm": 77.2,
      "attn": 3.3,
      "repack": 6.3,
      "ops": 1.3,
      "thread": 5.5
     }
    },
    "a100": {
     "top": [
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 36.47
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 30.67
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 16.83
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 2.92
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.51
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.28
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.27
      },
      {
       "sym": "END5176",
       "pct": 1.24
      },
      {
       "sym": "spacemit_kernels::rvv::quantize_a_4row_i8(unsigned",
       "pct": 1.16
      }
     ],
     "ipc": 0.26,
     "frontend": 1.71,
     "backend": 79.34,
     "buckets": {
      "gemm": 68.4,
      "attn": 2.9,
      "repack": 16.8,
      "ops": 1.2,
      "thread": 5.1
     }
    }
   },
   "q1.5b-q8_0": {
    "x100": {
     "top": [
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 43.68
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 36.96
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 3.51
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.94
      },
      {
       "sym": "END5176",
       "pct": 1.48
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.47
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.46
      },
      {
       "sym": "spacemit_kernels::rvv::quantize_a_4row_i8(unsigned",
       "pct": 1.43
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 1.14
      }
     ],
     "ipc": 0.2,
     "frontend": 1.7,
     "backend": 83.55,
     "buckets": {
      "gemm": 82.1,
      "attn": 3.5,
      "ops": 2.6,
      "thread": 5.9
     }
    },
    "a100": {
     "top": [
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 43.19
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 36.65
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 3.48
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.88
      },
      {
       "sym": "END5176",
       "pct": 1.46
      },
      {
       "sym": "0x000000000001e950",
       "pct": 1.43
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.43
      },
      {
       "sym": "spacemit_kernels::rvv::quantize_a_4row_i8(unsigned",
       "pct": 1.41
      },
      {
       "sym": "repack_q8_0_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 1.25
      }
     ],
     "ipc": 0.2,
     "frontend": 1.35,
     "backend": 83.33,
     "buckets": {
      "gemm": 81.3,
      "attn": 3.5,
      "repack": 1.2,
      "ops": 1.4,
      "thread": 5.7
     }
    }
   },
   "Q3-0.6B": {
    "x100": {
     "top": [
      {
       "sym": "BLK_LOOP825",
       "pct": 23.54
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 13.86
      },
      {
       "sym": "_K_LPST654",
       "pct": 12.77
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 10.67
      },
      {
       "sym": "0x000000000001e956",
       "pct": 5.45
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 4.9
      },
      {
       "sym": "END5176",
       "pct": 4.71
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 3.6
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 2.77
      }
     ],
     "ipc": 0.35,
     "frontend": 2.68,
     "backend": 75.6,
     "buckets": {
      "gemm": 58.5,
      "attn": 10.7,
      "ops": 4.9,
      "thread": 8.2
     }
    },
    "a100": {
     "top": [
      {
       "sym": "BLK_LOOP825",
       "pct": 22.25
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 12.98
      },
      {
       "sym": "_K_LPST654",
       "pct": 12.0
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 10.36
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 6.02
      },
      {
       "sym": "0x000000000001e956",
       "pct": 5.12
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 4.64
      },
      {
       "sym": "END5176",
       "pct": 4.57
      },
      {
       "sym": "BLK_LOOP1736",
       "pct": 3.38
      }
     ],
     "ipc": 0.33,
     "frontend": 2.18,
     "backend": 74.07,
     "buckets": {
      "gemm": 55.2,
      "attn": 10.4,
      "repack": 6.0,
      "ops": 4.6,
      "thread": 5.1
     }
    }
   },
   "Q3-4B": {
    "x100": {
     "top": [
      {
       "sym": "_KsubBLK_LPST981",
       "pct": 36.26
      },
      {
       "sym": "INNER_BLK_LOOP758",
       "pct": 27.14
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 6.63
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 6.16
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 3.04
      },
      {
       "sym": "END5176",
       "pct": 2.88
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.86
      },
      {
       "sym": "BLK_LOOP825",
       "pct": 1.67
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 1.44
      }
     ],
     "ipc": 0.29,
     "frontend": 1.85,
     "backend": 79.29,
     "buckets": {
      "gemm": 74.1,
      "attn": 6.6,
      "ops": 3.0,
      "thread": 4.3
     }
    },
    "a100": {
     "top": [
      {
       "sym": "_KsubBLK_LPST981",
       "pct": 35.28
      },
      {
       "sym": "INNER_BLK_LOOP758",
       "pct": 26.29
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 6.5
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 5.97
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 2.94
      },
      {
       "sym": "END5176",
       "pct": 2.87
      },
      {
       "sym": "repack_q6_k_to_q8_0_32_bl_ref(ggml_tensor*,",
       "pct": 2.69
      },
      {
       "sym": "0x000000000001e956",
       "pct": 2.68
      },
      {
       "sym": "BLK_LOOP825",
       "pct": 1.62
      }
     ],
     "ipc": 0.28,
     "frontend": 1.23,
     "backend": 79.0,
     "buckets": {
      "gemm": 72.0,
      "attn": 6.5,
      "repack": 2.7,
      "ops": 2.9,
      "thread": 2.7
     }
    }
   },
   "trendyol-7b": {
    "x100": {
     "top": [
      {
       "sym": "BLK_LOOP1629",
       "pct": 58.28
      },
      {
       "sym": "BLK_LPST1494",
       "pct": 28.31
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 2.61
      },
      {
       "sym": "0x000000000001e956",
       "pct": 1.29
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 1.18
      },
      {
       "sym": "END5176",
       "pct": 1.12
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.83
      },
      {
       "sym": "LOOP_M8N5176",
       "pct": 0.67
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.65
      }
     ],
     "ipc": 0.26,
     "frontend": 1.13,
     "backend": 79.28,
     "buckets": {
      "gemm": 88.9,
      "attn": 2.6,
      "ops": 0.8,
      "thread": 1.9,
      "misc": 0.7
     }
    },
    "a100": {
     "top": [
      {
       "sym": "BLK_LOOP1629",
       "pct": 57.34
      },
      {
       "sym": "BLK_LPST1494",
       "pct": 28.25
      },
      {
       "sym": "spacemit_kernels::rvv::forward_flash_attn_ext_f16_tiled_vlen1024_vf16(ggml_compute_params",
       "pct": 2.55
      },
      {
       "sym": "0x000000000001e956",
       "pct": 1.28
      },
      {
       "sym": "repack_q5_0_to_q5_0_32_bl(ggml_tensor*,",
       "pct": 1.21
      },
      {
       "sym": "spacemit_kernels::ime2::gemm_kernel_i8i8_m1(unsigned",
       "pct": 1.18
      },
      {
       "sym": "END5176",
       "pct": 1.08
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.81
      },
      {
       "sym": "LOOP_M8N5176",
       "pct": 0.65
      }
     ],
     "ipc": 0.25,
     "frontend": 0.9,
     "backend": 79.24,
     "buckets": {
      "gemm": 87.9,
      "attn": 2.5,
      "repack": 1.2,
      "ops": 0.8,
      "thread": 1.3,
      "misc": 0.7
     }
    }
   }
  },
  "plain-repack": {
   "gemma-3-4b": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 41.18
      },
      {
       "sym": "ggml_gemm_q4_K_16x1_q8_K",
       "pct": 37.92
      },
      {
       "sym": "ggml_gemv_q4_K_16x1_q8_K",
       "pct": 12.15
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.19
      },
      {
       "sym": "0x000000000001e954",
       "pct": 2.05
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.35
      },
      {
       "sym": "ggml_quantize_mat_q8_K_4x1",
       "pct": 0.64
      },
      {
       "sym": "ggml_compute_forward_glu",
       "pct": 0.38
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.29
      }
     ],
     "ipc": 1.19,
     "frontend": 64.89,
     "backend": 28.59,
     "buckets": {
      "vec_dot": 79.1,
      "attn": 1.4,
      "ops": 0.7,
      "thread": 4.2,
      "misc": 12.8
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 91.24
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 7.62
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.16
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.16
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.13
      },
      {
       "sym": "ggml_compute_forward_glu",
       "pct": 0.13
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.08
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.08
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.08
      }
     ],
     "ipc": 0.14,
     "frontend": 0.21,
     "backend": 89.66,
     "buckets": {
      "vec_dot": 98.9,
      "attn": 0.1,
      "ops": 0.2,
      "thread": 0.3,
      "misc": 0.2
     }
    }
   },
   "prem-1b": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 95.17
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.38
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 0.86
      },
      {
       "sym": "0x000000000001e954",
       "pct": 0.81
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 0.51
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.27
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.16
      },
      {
       "sym": "ggml_vec_soft_max_f32",
       "pct": 0.09
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.08
      }
     ],
     "ipc": 0.76,
     "frontend": 78.82,
     "backend": 7.36,
     "buckets": {
      "vec_dot": 95.7,
      "attn": 1.4,
      "ops": 0.2,
      "thread": 1.7,
      "misc": 0.4
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 98.77
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.37
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.18
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.15
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.09
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.06
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.04
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.04
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.03
      }
     ],
     "ipc": 0.16,
     "frontend": 0.18,
     "backend": 89.62,
     "buckets": {
      "vec_dot": 99.0,
      "attn": 0.4,
      "ops": 0.0,
      "thread": 0.2,
      "misc": 0.2
     }
    }
   },
   "q0.5B-Q4_K": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 77.09
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 9.39
      },
      {
       "sym": "ggml_gemv_q8_0_16x1_q8_0",
       "pct": 2.67
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 2.14
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.81
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.7
      },
      {
       "sym": "ggml_gemm_q4_K_16x1_q8_K",
       "pct": 1.66
      },
      {
       "sym": "ggml_gemv_q4_K_16x1_q8_K",
       "pct": 0.57
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.54
      }
     ],
     "ipc": 0.83,
     "frontend": 75.23,
     "backend": 14.14,
     "buckets": {
      "vec_dot": 88.1,
      "attn": 2.1,
      "thread": 3.5,
      "misc": 3.8
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 78.08
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 10.5
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 4.76
      },
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 4.45
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.57
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.32
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.31
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.16
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.16
      }
     ],
     "ipc": 0.17,
     "frontend": 0.36,
     "backend": 88.69,
     "buckets": {
      "vec_dot": 97.8,
      "attn": 0.6,
      "thread": 0.6,
      "misc": 0.3
     }
    }
   },
   "q0.5B-Q6_K": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 36.08
      },
      {
       "sym": "ggml_gemm_q8_0_16x1_q8_0",
       "pct": 34.42
      },
      {
       "sym": "ggml_gemv_q8_0_16x1_q8_0",
       "pct": 14.76
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 4.26
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.89
      },
      {
       "sym": "0x000000000001e954",
       "pct": 2.7
      },
      {
       "sym": "ggml_quantize_mat_q8_0_4x1",
       "pct": 1.04
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.49
      },
      {
       "sym": "ggml_vec_soft_max_f32",
       "pct": 0.31
      }
     ],
     "ipc": 0.95,
     "frontend": 70.7,
     "backend": 29.17,
     "buckets": {
      "vec_dot": 70.5,
      "attn": 4.3,
      "ops": 0.8,
      "thread": 5.6,
      "misc": 15.8
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 87.26
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 10.22
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.64
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.36
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.36
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.18
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.18
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.08
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.06
      }
     ],
     "ipc": 0.14,
     "frontend": 0.38,
     "backend": 90.09,
     "buckets": {
      "vec_dot": 97.5,
      "attn": 0.6,
      "ops": 0.1,
      "thread": 0.7,
      "misc": 0.4
     }
    }
   },
   "q1.5b-q2_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl256",
       "pct": 48.13
      },
      {
       "sym": "ggml_gemm_q2_K_16x1_q8_K",
       "pct": 31.39
      },
      {
       "sym": "ggml_gemv_q2_K_16x1_q8_K",
       "pct": 7.52
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 4.07
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.94
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.84
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.83
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.4
      },
      {
       "sym": "ggml_quantize_mat_q8_K_4x1",
       "pct": 0.39
      }
     ],
     "ipc": 1.21,
     "frontend": 66.77,
     "backend": 19.46,
     "buckets": {
      "vec_dot": 83.6,
      "attn": 1.8,
      "ops": 0.4,
      "thread": 3.8,
      "misc": 7.9
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q2_K_q8_K_vl256",
       "pct": 80.18
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl1024",
       "pct": 16.4
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 1.0
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.85
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.27
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.25
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.2
      },
      {
       "sym": "ggml_vec_dot_q2_K_q8_K",
       "pct": 0.11
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.1
      }
     ],
     "ipc": 0.18,
     "frontend": 0.23,
     "backend": 87.17,
     "buckets": {
      "vec_dot": 98.5,
      "attn": 0.3,
      "thread": 0.3,
      "misc": 0.2
     }
    }
   },
   "q1.5b-q3_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl256",
       "pct": 72.8
      },
      {
       "sym": "ggml_gemm_q4_K_16x1_q8_K",
       "pct": 8.92
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 3.28
      },
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 2.87
      },
      {
       "sym": "ggml_gemv_q4_K_16x1_q8_K",
       "pct": 2.87
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.12
      },
      {
       "sym": "0x000000000001e954",
       "pct": 2.01
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.48
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.66
      }
     ],
     "ipc": 1.33,
     "frontend": 63.9,
     "backend": 19.91,
     "buckets": {
      "vec_dot": 87.9,
      "attn": 1.5,
      "thread": 4.1,
      "misc": 3.5
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 53.18
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl1024",
       "pct": 39.75
      },
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 3.95
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 1.12
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.36
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.31
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K",
       "pct": 0.28
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.21
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.1
      }
     ],
     "ipc": 0.26,
     "frontend": 0.33,
     "backend": 82.01,
     "buckets": {
      "vec_dot": 98.3,
      "attn": 0.4,
      "thread": 0.3,
      "misc": 0.3
     }
    }
   },
   "q1.5b-q4_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 38.49
      },
      {
       "sym": "ggml_gemm_q4_K_16x1_q8_K",
       "pct": 37.35
      },
      {
       "sym": "ggml_gemv_q4_K_16x1_q8_K",
       "pct": 11.98
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.89
      },
      {
       "sym": "0x000000000001e954",
       "pct": 2.72
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 2.53
      },
      {
       "sym": "ggml_quantize_mat_q8_K_4x1",
       "pct": 0.89
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.54
      },
      {
       "sym": "repack_q4_K_to_q4_K_16_bl(ggml_tensor*,",
       "pct": 0.21
      }
     ],
     "ipc": 1.18,
     "frontend": 65.23,
     "backend": 28.54,
     "buckets": {
      "vec_dot": 75.8,
      "attn": 2.5,
      "repack": 0.2,
      "ops": 0.5,
      "thread": 5.6,
      "misc": 12.9
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 91.4
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 7.17
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.25
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.23
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.21
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K",
       "pct": 0.12
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.1
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.1
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.05
      }
     ],
     "ipc": 0.14,
     "frontend": 0.25,
     "backend": 89.46,
     "buckets": {
      "vec_dot": 98.7,
      "attn": 0.2,
      "thread": 0.4,
      "misc": 0.3
     }
    }
   },
   "q1.5b-q5_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 87.19
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 9.14
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 0.93
      },
      {
       "sym": "0x000000000001e954",
       "pct": 0.84
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.6
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.34
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.15
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.13
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.08
      }
     ],
     "ipc": 0.78,
     "frontend": 80.41,
     "backend": 16.27,
     "buckets": {
      "vec_dot": 96.3,
      "attn": 0.6,
      "ops": 0.1,
      "thread": 1.9,
      "misc": 0.5
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 95.92
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 3.34
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.16
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.12
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.1
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.08
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.08
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.02
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.02
      }
     ],
     "ipc": 0.12,
     "frontend": 0.13,
     "backend": 91.18,
     "buckets": {
      "vec_dot": 99.3,
      "attn": 0.1,
      "ops": 0.0,
      "thread": 0.3,
      "misc": 0.1
     }
    }
   },
   "q1.5b-q6_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 93.69
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.48
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.39
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.04
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.52
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K",
       "pct": 0.29
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.26
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.22
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.11
      }
     ],
     "ipc": 0.91,
     "frontend": 74.53,
     "backend": 31.59,
     "buckets": {
      "vec_dot": 94.0,
      "attn": 1.0,
      "ops": 0.2,
      "thread": 3.0,
      "misc": 0.8
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 97.27
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.54
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.45
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K",
       "pct": 0.35
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.26
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.13
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.13
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.11
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.08
      }
     ],
     "ipc": 0.31,
     "frontend": 0.4,
     "backend": 76.64,
     "buckets": {
      "vec_dot": 97.6,
      "attn": 0.5,
      "ops": 0.1,
      "thread": 0.5,
      "misc": 0.6
     }
    }
   },
   "q1.5b-q8_0": {
    "x100": {
     "top": [
      {
       "sym": "ggml_gemm_q8_0_16x1_q8_0",
       "pct": 67.15
      },
      {
       "sym": "ggml_gemv_q8_0_16x1_q8_0",
       "pct": 22.03
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.59
      },
      {
       "sym": "0x000000000001e954",
       "pct": 2.41
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.84
      },
      {
       "sym": "ggml_quantize_mat_q8_0_4x1",
       "pct": 1.53
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.39
      },
      {
       "sym": "repack_q8_0_to_q8_0_16_bl(ggml_tensor*,",
       "pct": 0.34
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.19
      }
     ],
     "ipc": 1.02,
     "frontend": 68.04,
     "backend": 23.18,
     "buckets": {
      "vec_dot": 67.2,
      "attn": 1.8,
      "repack": 0.3,
      "ops": 0.4,
      "thread": 5.2,
      "misc": 23.6
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 98.97
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.2
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.16
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.15
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.07
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.07
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.06
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.02
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.02
      }
     ],
     "ipc": 0.11,
     "frontend": 0.22,
     "backend": 92.44,
     "buckets": {
      "vec_dot": 99.0,
      "attn": 0.2,
      "ops": 0.0,
      "thread": 0.3,
      "misc": 0.3
     }
    }
   },
   "Q3-0.6B": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 26.3
      },
      {
       "sym": "ggml_gemm_q4_K_16x1_q8_K",
       "pct": 24.83
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 14.02
      },
      {
       "sym": "0x000000000001e954",
       "pct": 13.12
      },
      {
       "sym": "ggml_gemv_q4_K_16x1_q8_K",
       "pct": 7.69
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 6.53
      },
      {
       "sym": "ggml_quantize_mat_q8_K_4x1",
       "pct": 1.05
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.94
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.58
      }
     ],
     "ipc": 1.43,
     "frontend": 51.18,
     "backend": 46.77,
     "buckets": {
      "vec_dot": 51.1,
      "attn": 6.5,
      "ops": 0.6,
      "thread": 28.1,
      "misc": 8.7
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 89.67
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 7.09
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.96
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.35
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.33
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.2
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K",
       "pct": 0.18
      },
      {
       "sym": "ggml_cpu_fp16_to_fp32",
       "pct": 0.17
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.16
      }
     ],
     "ipc": 0.15,
     "frontend": 0.31,
     "backend": 88.54,
     "buckets": {
      "vec_dot": 96.9,
      "attn": 1.0,
      "ops": 0.2,
      "thread": 0.5,
      "misc": 0.5
     }
    }
   },
   "Q3-4B": {
    "x100": {
     "top": [
      {
       "sym": "ggml_gemm_q4_0_16x1_q8_0",
       "pct": 53.5
      },
      {
       "sym": "ggml_gemv_q4_0_16x1_q8_0",
       "pct": 15.72
      },
      {
       "sym": "ggml_vec_dot_q4_1_q8_1",
       "pct": 12.03
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 4.44
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 3.94
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.84
      },
      {
       "sym": "0x000000000001e954",
       "pct": 2.68
      },
      {
       "sym": "ggml_quantize_mat_q8_0_4x1",
       "pct": 1.72
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.36
      }
     ],
     "ipc": 1.07,
     "frontend": 66.43,
     "backend": 32.71,
     "buckets": {
      "vec_dot": 70.0,
      "attn": 3.9,
      "ops": 0.4,
      "thread": 5.5,
      "misc": 17.4
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_0_q8_0",
       "pct": 95.93
      },
      {
       "sym": "ggml_vec_dot_q4_1_q8_1",
       "pct": 2.88
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.39
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.22
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.13
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.07
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.05
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.04
      },
      {
       "sym": "ggml_cpu_fp16_to_fp32",
       "pct": 0.04
      }
     ],
     "ipc": 0.15,
     "frontend": 0.15,
     "backend": 90.18,
     "buckets": {
      "vec_dot": 99.2,
      "attn": 0.2,
      "ops": 0.1,
      "thread": 0.1,
      "misc": 0.2
     }
    }
   },
   "trendyol-7b": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 97.95
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 0.41
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.39
      },
      {
       "sym": "0x000000000001e954",
       "pct": 0.38
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 0.21
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.16
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.06
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.04
      },
      {
       "sym": "ggml_cpu_fp16_to_fp32",
       "pct": 0.03
      }
     ],
     "ipc": 0.74,
     "frontend": 79.81,
     "backend": 5.16,
     "buckets": {
      "vec_dot": 98.2,
      "attn": 0.4,
      "ops": 0.0,
      "thread": 0.8,
      "misc": 0.2
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 99.41
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.11
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.09
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.08
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.07
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.03
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.03
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.03
      },
      {
       "sym": "ggml_cpu_fp16_to_fp32",
       "pct": 0.02
      }
     ],
     "ipc": 0.16,
     "frontend": 0.13,
     "backend": 89.68,
     "buckets": {
      "vec_dot": 99.5,
      "attn": 0.1,
      "thread": 0.1,
      "misc": 0.1
     }
    }
   }
  },
  "plain-norepack": {
   "gemma-3-4b": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 71.68
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 21.75
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.89
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.76
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.71
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.48
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.25
      },
      {
       "sym": "ggml_compute_forward_glu",
       "pct": 0.2
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.15
      }
     ],
     "ipc": 1.04,
     "frontend": 70.75,
     "backend": 18.4,
     "buckets": {
      "vec_dot": 93.4,
      "attn": 0.7,
      "ops": 0.3,
      "thread": 3.6,
      "misc": 0.7
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 91.06
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 7.77
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.16
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.16
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.14
      },
      {
       "sym": "ggml_compute_forward_glu",
       "pct": 0.13
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.08
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.08
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K",
       "pct": 0.08
      }
     ],
     "ipc": 0.14,
     "frontend": 0.14,
     "backend": 89.51,
     "buckets": {
      "vec_dot": 98.9,
      "attn": 0.1,
      "ops": 0.2,
      "thread": 0.2,
      "misc": 0.2
     }
    }
   },
   "prem-1b": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 95.16
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.37
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 0.89
      },
      {
       "sym": "0x000000000001e954",
       "pct": 0.83
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 0.51
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.27
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.16
      },
      {
       "sym": "ggml_vec_soft_max_f32",
       "pct": 0.09
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.08
      }
     ],
     "ipc": 0.76,
     "frontend": 78.93,
     "backend": 7.37,
     "buckets": {
      "vec_dot": 95.7,
      "attn": 1.4,
      "ops": 0.2,
      "thread": 1.7,
      "misc": 0.4
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 98.76
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.37
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.19
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.15
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.09
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.06
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.05
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.05
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.03
      }
     ],
     "ipc": 0.16,
     "frontend": 0.12,
     "backend": 89.65,
     "buckets": {
      "vec_dot": 99.0,
      "attn": 0.4,
      "ops": 0.0,
      "thread": 0.2,
      "misc": 0.2
     }
    }
   },
   "q0.5B-Q4_K": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 73.87
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 9.01
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 5.61
      },
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 3.28
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 2.03
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.84
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.69
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.6
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.23
      }
     ],
     "ipc": 0.82,
     "frontend": 76.05,
     "backend": 13.35,
     "buckets": {
      "vec_dot": 91.8,
      "attn": 2.0,
      "ops": 0.2,
      "thread": 3.5,
      "misc": 0.6
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 78.12
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 10.5
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 4.73
      },
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 4.46
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.57
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.31
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.31
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.15
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.15
      }
     ],
     "ipc": 0.17,
     "frontend": 0.19,
     "backend": 88.81,
     "buckets": {
      "vec_dot": 97.8,
      "attn": 0.6,
      "thread": 0.6,
      "misc": 0.3
     }
    }
   },
   "q0.5B-Q6_K": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 69.43
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 21.03
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 2.45
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.0
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.86
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.72
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.29
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.26
      },
      {
       "sym": "ggml_vec_soft_max_f32",
       "pct": 0.18
      }
     ],
     "ipc": 0.75,
     "frontend": 75.74,
     "backend": 18.42,
     "buckets": {
      "vec_dot": 90.5,
      "attn": 2.5,
      "ops": 0.5,
      "thread": 3.9,
      "misc": 1.0
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 87.18
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 10.31
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.64
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.36
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.35
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.18
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.18
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.08
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.05
      }
     ],
     "ipc": 0.14,
     "frontend": 0.22,
     "backend": 90.2,
     "buckets": {
      "vec_dot": 97.5,
      "attn": 0.6,
      "ops": 0.1,
      "thread": 0.7,
      "misc": 0.4
     }
    }
   },
   "q1.5b-q2_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q2_K_q8_K_vl256",
       "pct": 62.73
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl256",
       "pct": 28.39
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 2.4
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.31
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.22
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.07
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 0.59
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.52
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.28
      }
     ],
     "ipc": 0.96,
     "frontend": 73.76,
     "backend": 16.61,
     "buckets": {
      "vec_dot": 94.1,
      "attn": 1.1,
      "thread": 2.5,
      "misc": 0.8
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q2_K_q8_K_vl256",
       "pct": 80.17
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl1024",
       "pct": 16.42
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 1.0
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.85
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.27
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.25
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.21
      },
      {
       "sym": "ggml_vec_dot_q2_K_q8_K",
       "pct": 0.11
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.1
      }
     ],
     "ipc": 0.18,
     "frontend": 0.16,
     "backend": 87.21,
     "buckets": {
      "vec_dot": 98.5,
      "attn": 0.3,
      "thread": 0.3,
      "misc": 0.2
     }
    }
   },
   "q1.5b-q3_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl256",
       "pct": 60.97
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 26.77
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 2.75
      },
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 2.41
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.49
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.4
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.22
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.67
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K",
       "pct": 0.47
      }
     ],
     "ipc": 1.22,
     "frontend": 67.76,
     "backend": 16.28,
     "buckets": {
      "vec_dot": 93.4,
      "attn": 1.2,
      "thread": 2.9,
      "misc": 0.7
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 53.22
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K_vl1024",
       "pct": 39.7
      },
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 3.96
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 1.12
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.36
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.31
      },
      {
       "sym": "ggml_vec_dot_q3_K_q8_K",
       "pct": 0.27
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.21
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.1
      }
     ],
     "ipc": 0.27,
     "frontend": 0.22,
     "backend": 82.12,
     "buckets": {
      "vec_dot": 98.3,
      "attn": 0.4,
      "thread": 0.3,
      "misc": 0.3
     }
    }
   },
   "q1.5b-q4_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 72.41
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 20.55
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.51
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.41
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.34
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.67
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.34
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.29
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K",
       "pct": 0.15
      }
     ],
     "ipc": 1.01,
     "frontend": 72.51,
     "backend": 16.72,
     "buckets": {
      "vec_dot": 93.1,
      "attn": 1.3,
      "ops": 0.3,
      "thread": 2.9,
      "misc": 1.0
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 91.4
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 7.13
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.25
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.23
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.21
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K",
       "pct": 0.12
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.11
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.11
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.05
      }
     ],
     "ipc": 0.14,
     "frontend": 0.16,
     "backend": 89.51,
     "buckets": {
      "vec_dot": 98.7,
      "attn": 0.2,
      "thread": 0.4,
      "misc": 0.3
     }
    }
   },
   "q1.5b-q5_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 87.28
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 9.17
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 0.86
      },
      {
       "sym": "0x000000000001e954",
       "pct": 0.82
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.59
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.34
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.15
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.13
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.07
      }
     ],
     "ipc": 0.78,
     "frontend": 80.36,
     "backend": 16.31,
     "buckets": {
      "vec_dot": 96.5,
      "attn": 0.6,
      "ops": 0.1,
      "thread": 1.8,
      "misc": 0.5
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_K_q8_K",
       "pct": 95.96
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 3.31
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.16
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.11
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.1
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.08
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.08
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.02
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.02
      }
     ],
     "ipc": 0.12,
     "frontend": 0.12,
     "backend": 91.2,
     "buckets": {
      "vec_dot": 99.3,
      "attn": 0.1,
      "ops": 0.0,
      "thread": 0.3,
      "misc": 0.1
     }
    }
   },
   "q1.5b-q6_k": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 93.71
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.47
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.38
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 1.03
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.53
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K",
       "pct": 0.29
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.26
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.22
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.12
      }
     ],
     "ipc": 0.91,
     "frontend": 74.95,
     "backend": 31.64,
     "buckets": {
      "vec_dot": 94.0,
      "attn": 1.0,
      "ops": 0.2,
      "thread": 3.0,
      "misc": 0.8
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 97.27
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.53
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.45
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K",
       "pct": 0.35
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.26
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.13
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.13
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.11
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.08
      }
     ],
     "ipc": 0.31,
     "frontend": 0.28,
     "backend": 76.75,
     "buckets": {
      "vec_dot": 97.6,
      "attn": 0.5,
      "ops": 0.1,
      "thread": 0.5,
      "misc": 0.6
     }
    }
   },
   "q1.5b-q8_0": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 95.29
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 1.15
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.06
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.77
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.44
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.21
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.17
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.1
      },
      {
       "sym": "ggml_compute_forward_add_non_quantized",
       "pct": 0.06
      }
     ],
     "ipc": 0.66,
     "frontend": 78.18,
     "backend": 9.31,
     "buckets": {
      "vec_dot": 95.3,
      "attn": 0.8,
      "ops": 0.2,
      "thread": 2.3,
      "misc": 0.7
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q8_0_q8_0",
       "pct": 98.95
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.2
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.17
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.15
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.07
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.07
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.06
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.02
      },
      {
       "sym": "memcpy@plt",
       "pct": 0.02
      }
     ],
     "ipc": 0.11,
     "frontend": 0.17,
     "backend": 92.46,
     "buckets": {
      "vec_dot": 99.0,
      "attn": 0.2,
      "ops": 0.0,
      "thread": 0.3,
      "memcpy": 0.0,
      "misc": 0.3
     }
    }
   },
   "Q3-0.6B": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 66.29
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 19.53
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 4.81
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 2.05
      },
      {
       "sym": "0x000000000001e954",
       "pct": 1.92
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.97
      },
      {
       "sym": "quantize_row_q8_K",
       "pct": 0.52
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.43
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.27
      }
     ],
     "ipc": 1.04,
     "frontend": 70.45,
     "backend": 22.2,
     "buckets": {
      "vec_dot": 85.8,
      "attn": 4.8,
      "ops": 0.7,
      "thread": 4.0,
      "misc": 1.5
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_K_q8_K_vl256.isra.0",
       "pct": 89.43
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 7.1
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.95
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.44
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.35
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.22
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.22
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.2
      },
      {
       "sym": "ggml_vec_dot_q4_K_q8_K",
       "pct": 0.18
      }
     ],
     "ipc": 0.16,
     "frontend": 0.2,
     "backend": 88.42,
     "buckets": {
      "vec_dot": 96.7,
      "attn": 0.9,
      "ops": 0.2,
      "thread": 0.9,
      "misc": 0.3
     }
    }
   },
   "Q3-4B": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_0_q8_0",
       "pct": 93.46
      },
      {
       "sym": "ggml_vec_dot_q4_1_q8_1",
       "pct": 2.55
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 0.94
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.83
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 0.6
      },
      {
       "sym": "0x000000000001e954",
       "pct": 0.55
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.23
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.11
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.07
      }
     ],
     "ipc": 0.71,
     "frontend": 78.03,
     "backend": 36.27,
     "buckets": {
      "vec_dot": 96.9,
      "attn": 0.8,
      "ops": 0.1,
      "thread": 1.1,
      "misc": 0.3
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q4_0_q8_0",
       "pct": 95.97
      },
      {
       "sym": "ggml_vec_dot_q4_1_q8_1",
       "pct": 2.88
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.34
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.22
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.13
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.07
      },
      {
       "sym": "ggml_compute_forward_rms_norm_mul_fused",
       "pct": 0.05
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.04
      },
      {
       "sym": "ggml_cpu_fp16_to_fp32",
       "pct": 0.04
      }
     ],
     "ipc": 0.15,
     "frontend": 0.12,
     "backend": 90.19,
     "buckets": {
      "vec_dot": 99.2,
      "attn": 0.2,
      "ops": 0.1,
      "thread": 0.1,
      "misc": 0.2
     }
    }
   },
   "trendyol-7b": {
    "x100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 97.67
      },
      {
       "sym": "0x000000000001e94c",
       "pct": 0.53
      },
      {
       "sym": "0x000000000001e954",
       "pct": 0.5
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.38
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl256.isra.0",
       "pct": 0.21
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.16
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.06
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.04
      },
      {
       "sym": "ggml_vec_swiglu_f32",
       "pct": 0.04
      }
     ],
     "ipc": 0.74,
     "frontend": 79.69,
     "backend": 5.41,
     "buckets": {
      "vec_dot": 97.9,
      "attn": 0.4,
      "ops": 0.0,
      "thread": 1.1,
      "misc": 0.2
     }
    },
    "a100": {
     "top": [
      {
       "sym": "ggml_vec_dot_q5_0_q8_0",
       "pct": 99.4
      },
      {
       "sym": "ggml_compute_forward_flash_attn_ext_tiled(ggml_compute_params",
       "pct": 0.11
      },
      {
       "sym": "ggml_compute_forward_mul_mat",
       "pct": 0.09
      },
      {
       "sym": "ggml_vec_dot_q6_K_q8_K_vl1024.isra.0",
       "pct": 0.08
      },
      {
       "sym": "0x000000000001e956",
       "pct": 0.07
      },
      {
       "sym": "0x000000000001e950",
       "pct": 0.03
      },
      {
       "sym": "0x000000000001e94a",
       "pct": 0.03
      },
      {
       "sym": "quantize_row_q8_0",
       "pct": 0.03
      },
      {
       "sym": "0x000000000008deae",
       "pct": 0.02
      }
     ],
     "ipc": 0.16,
     "frontend": 0.1,
     "backend": 89.72,
     "buckets": {
      "vec_dot": 99.5,
      "attn": 0.1,
      "thread": 0.1,
      "misc": 0.1
     }
    }
   }
  }
 },
 "models": {
  "gemma-3-4b": {
   "spacemit": {
    "x100": {
     "pp": 56.22,
     "pp_sd": 0.06,
     "tg": 7.04,
     "tg_sd": 0.0
    },
    "a100": {
     "pp": 56.07,
     "pp_sd": 0.04,
     "tg": 7.3,
     "tg_sd": 0.03
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 18.48,
     "pp_sd": 0.19,
     "tg": 4.25,
     "tg_sd": 0.44
    },
    "a100": {
     "pp": 1.05,
     "pp_sd": 0.0,
     "tg": 0.92,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 8.69,
     "pp_sd": 0.14,
     "tg": 4.32,
     "tg_sd": 0.04
    },
    "a100": {
     "pp": 1.05,
     "pp_sd": 0.0,
     "tg": 0.91,
     "tg_sd": 0.0
    }
   }
  },
  "prem-1b": {
   "spacemit": {
    "x100": {
     "pp": 162.04,
     "pp_sd": 0.11,
     "tg": 28.82,
     "tg_sd": 0.17
    },
    "a100": {
     "pp": 161.44,
     "pp_sd": 0.04,
     "tg": 29.55,
     "tg_sd": 0.21
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 12.02,
     "pp_sd": 0.09,
     "tg": 7.65,
     "tg_sd": 0.56
    },
    "a100": {
     "pp": 2.17,
     "pp_sd": 0.0,
     "tg": 2.05,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 11.82,
     "pp_sd": 0.1,
     "tg": 8.71,
     "tg_sd": 0.34
    },
    "a100": {
     "pp": 2.17,
     "pp_sd": 0.0,
     "tg": 2.03,
     "tg_sd": 0.0
    }
   }
  },
  "q0.5B-Q4_K": {
   "spacemit": {
    "x100": {
     "pp": 428.86,
     "pp_sd": 0.5,
     "tg": 48.81,
     "tg_sd": 0.36
    },
    "a100": {
     "pp": 426.54,
     "pp_sd": 0.79,
     "tg": 50.21,
     "tg_sd": 0.32
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 37.62,
     "pp_sd": 0.92,
     "tg": 16.23,
     "tg_sd": 1.18
    },
    "a100": {
     "pp": 6.84,
     "pp_sd": 0.0,
     "tg": 4.37,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 36.34,
     "pp_sd": 0.62,
     "tg": 13.14,
     "tg_sd": 1.72
    },
    "a100": {
     "pp": 6.83,
     "pp_sd": 0.0,
     "tg": 4.35,
     "tg_sd": 0.0
    }
   }
  },
  "q0.5B-Q6_K": {
   "spacemit": {
    "x100": {
     "pp": 506.87,
     "pp_sd": 1.3,
     "tg": 40.23,
     "tg_sd": 0.35
    },
    "a100": {
     "pp": 499.1,
     "pp_sd": 0.97,
     "tg": 41.04,
     "tg_sd": 0.23
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 83.07,
     "pp_sd": 3.09,
     "tg": 16.49,
     "tg_sd": 2.64
    },
    "a100": {
     "pp": 7.78,
     "pp_sd": 0.0,
     "tg": 4.7,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 43.94,
     "pp_sd": 1.31,
     "tg": 14.16,
     "tg_sd": 1.17
    },
    "a100": {
     "pp": 7.78,
     "pp_sd": 0.0,
     "tg": 4.69,
     "tg_sd": 0.0
    }
   }
  },
  "q1.5b-q2_k": {
   "spacemit": {
    "x100": {
     "pp": 198.14,
     "pp_sd": 0.17,
     "tg": 27.62,
     "tg_sd": 0.23
    },
    "a100": {
     "pp": 198.4,
     "pp_sd": 0.15,
     "tg": 28.26,
     "tg_sd": 0.18
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 29.35,
     "pp_sd": 0.68,
     "tg": 10.1,
     "tg_sd": 0.17
    },
    "a100": {
     "pp": 2.4,
     "pp_sd": 0.55,
     "tg": 2.33,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 16.43,
     "pp_sd": 0.13,
     "tg": 8.83,
     "tg_sd": 1.07
    },
    "a100": {
     "pp": 2.79,
     "pp_sd": 0.0,
     "tg": 2.33,
     "tg_sd": 0.0
    }
   }
  },
  "q1.5b-q3_k": {
   "spacemit": {
    "x100": {
     "pp": 154.43,
     "pp_sd": 0.2,
     "tg": 23.9,
     "tg_sd": 0.14
    },
    "a100": {
     "pp": 154.28,
     "pp_sd": 0.14,
     "tg": 24.6,
     "tg_sd": 0.13
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 23.77,
     "pp_sd": 0.09,
     "tg": 8.86,
     "tg_sd": 0.26
    },
    "a100": {
     "pp": 3.7,
     "pp_sd": 0.0,
     "tg": 2.44,
     "tg_sd": 0.84
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 18.94,
     "pp_sd": 0.21,
     "tg": 9.13,
     "tg_sd": 1.26
    },
    "a100": {
     "pp": 3.69,
     "pp_sd": 0.0,
     "tg": 2.88,
     "tg_sd": 0.0
    }
   }
  },
  "q1.5b-q4_k": {
   "spacemit": {
    "x100": {
     "pp": 147.42,
     "pp_sd": 0.13,
     "tg": 18.79,
     "tg_sd": 0.1
    },
    "a100": {
     "pp": 147.73,
     "pp_sd": 0.07,
     "tg": 19.4,
     "tg_sd": 0.11
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 45.05,
     "pp_sd": 0.81,
     "tg": 8.46,
     "tg_sd": 0.36
    },
    "a100": {
     "pp": 2.45,
     "pp_sd": 0.14,
     "tg": 1.74,
     "tg_sd": 0.47
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 20.82,
     "pp_sd": 0.16,
     "tg": 9.52,
     "tg_sd": 1.33
    },
    "a100": {
     "pp": 2.55,
     "pp_sd": 0.0,
     "tg": 1.96,
     "tg_sd": 0.0
    }
   }
  },
  "q1.5b-q5_k": {
   "spacemit": {
    "x100": {
     "pp": 107.49,
     "pp_sd": 0.05,
     "tg": 17.51,
     "tg_sd": 0.07
    },
    "a100": {
     "pp": 107.77,
     "pp_sd": 0.04,
     "tg": 18.04,
     "tg_sd": 0.04
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 9.09,
     "pp_sd": 0.04,
     "tg": 5.98,
     "tg_sd": 0.47
    },
    "a100": {
     "pp": 1.19,
     "pp_sd": 0.0,
     "tg": 0.94,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 9.03,
     "pp_sd": 0.1,
     "tg": 5.99,
     "tg_sd": 0.05
    },
    "a100": {
     "pp": 1.19,
     "pp_sd": 0.0,
     "tg": 0.94,
     "tg_sd": 0.0
    }
   }
  },
  "q1.5b-q6_k": {
   "spacemit": {
    "x100": {
     "pp": 147.4,
     "pp_sd": 0.1,
     "tg": 13.36,
     "tg_sd": 0.02
    },
    "a100": {
     "pp": 146.94,
     "pp_sd": 0.04,
     "tg": 13.62,
     "tg_sd": 0.06
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 16.71,
     "pp_sd": 0.16,
     "tg": 6.69,
     "tg_sd": 0.33
    },
    "a100": {
     "pp": 5.54,
     "pp_sd": 0.0,
     "tg": 4.38,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 16.44,
     "pp_sd": 0.22,
     "tg": 6.88,
     "tg_sd": 0.65
    },
    "a100": {
     "pp": 5.52,
     "pp_sd": 0.0,
     "tg": 4.42,
     "tg_sd": 0.0
    }
   }
  },
  "q1.5b-q8_0": {
   "spacemit": {
    "x100": {
     "pp": 147.17,
     "pp_sd": 0.15,
     "tg": 13.49,
     "tg_sd": 0.04
    },
    "a100": {
     "pp": 147.12,
     "pp_sd": 0.09,
     "tg": 13.38,
     "tg_sd": 0.05
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 31.44,
     "pp_sd": 0.82,
     "tg": 6.58,
     "tg_sd": 0.42
    },
    "a100": {
     "pp": 1.68,
     "pp_sd": 0.0,
     "tg": 1.33,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 11.71,
     "pp_sd": 0.12,
     "tg": 7.17,
     "tg_sd": 0.45
    },
    "a100": {
     "pp": 1.68,
     "pp_sd": 0.0,
     "tg": 1.33,
     "tg_sd": 0.0
    }
   }
  },
  "Q3-0.6B": {
   "spacemit": {
    "x100": {
     "pp": 361.99,
     "pp_sd": 0.1,
     "tg": 41.63,
     "tg_sd": 0.17
    },
    "a100": {
     "pp": 211.31,
     "pp_sd": 139.19,
     "tg": 34.93,
     "tg_sd": 15.46
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 121.58,
     "pp_sd": 5.2,
     "tg": 18.14,
     "tg_sd": 1.73
    },
    "a100": {
     "pp": 7.46,
     "pp_sd": 0.0,
     "tg": 5.95,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 57.83,
     "pp_sd": 1.6,
     "tg": 17.93,
     "tg_sd": 3.76
    },
    "a100": {
     "pp": 7.48,
     "pp_sd": 0.0,
     "tg": 6.02,
     "tg_sd": 0.0
    }
   }
  },
  "Q3-4B": {
   "spacemit": {
    "x100": {
     "pp": 75.06,
     "pp_sd": 0.03,
     "tg": 9.18,
     "tg_sd": 0.02
    },
    "a100": {
     "pp": 49.96,
     "pp_sd": 22.53,
     "tg": 9.23,
     "tg_sd": 0.03
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 19.58,
     "pp_sd": 0.3,
     "tg": 4.21,
     "tg_sd": 0.23
    },
    "a100": {
     "pp": 0.66,
     "pp_sd": 0.0,
     "tg": 0.6,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 3.62,
     "pp_sd": 0.05,
     "tg": 2.69,
     "tg_sd": 0.14
    },
    "a100": {
     "pp": 0.66,
     "pp_sd": 0.0,
     "tg": 0.6,
     "tg_sd": 0.0
    }
   }
  },
  "trendyol-7b": {
   "spacemit": {
    "x100": {
     "pp": 25.26,
     "pp_sd": 0.01,
     "tg": 4.69,
     "tg_sd": 0.05
    },
    "a100": {
     "pp": 25.25,
     "pp_sd": 0.01,
     "tg": 4.62,
     "tg_sd": 0.03
    }
   },
   "plain-repack": {
    "x100": {
     "pp": 1.81,
     "pp_sd": 0.01,
     "tg": 1.56,
     "tg_sd": 0.02
    },
    "a100": {
     "pp": 0.32,
     "pp_sd": 0.0,
     "tg": 0.31,
     "tg_sd": 0.0
    }
   },
   "plain-norepack": {
    "x100": {
     "pp": 1.81,
     "pp_sd": 0.01,
     "tg": 1.57,
     "tg_sd": 0.01
    },
    "a100": {
     "pp": 0.32,
     "pp_sd": 0.0,
     "tg": 0.31,
     "tg_sd": 0.0
    }
   }
  }
 },
 "correctness": {
  "builds": {
   "spacemit": {
    "x100": {
     "f16": {
      "abs": 4e-06,
      "ok": true,
      "dot": 1e-05
     },
     "q4_0": {
      "abs": 0.001121,
      "ok": true,
      "dot": 0.001143
     },
     "q4_1": {
      "abs": 0.001144,
      "ok": true,
      "dot": 0.007931
     },
     "q5_0": {
      "abs": 0.000591,
      "ok": true,
      "dot": 0.001353
     },
     "q5_1": {
      "abs": 0.000556,
      "ok": true,
      "dot": 0.001511
     },
     "q8_0": {
      "abs": 7.4e-05,
      "ok": true,
      "dot": 9.2e-05
     },
     "q2_K": {
      "abs": 0.004673,
      "ok": true,
      "dot": 0.010665
     },
     "q3_K": {
      "abs": 0.00251,
      "ok": true,
      "dot": 0.016686
     },
     "q4_K": {
      "abs": 0.000982,
      "ok": true,
      "dot": 0.002318
     },
     "q5_K": {
      "abs": 0.000532,
      "ok": true,
      "dot": 0.001595
     },
     "q6_K": {
      "abs": 0.000261,
      "ok": true,
      "dot": 0.000215
     },
     "iq4_nl": {
      "abs": 0.001296,
      "ok": true,
      "dot": 0.005155
     },
     "iq4_xs": {
      "abs": 0.001256,
      "ok": true,
      "dot": 0.002499
     },
     "bf16": {
      "abs": 3.6e-05,
      "ok": true,
      "dot": 0.000169
     },
     "tq1_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "tq2_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "mxfp4": {
      "abs": 0.001881,
      "ok": true,
      "dot": 0.005677
     },
     "nvfp4": {
      "abs": 0.002337,
      "ok": true,
      "dot": 0.019774
     },
     "q1_0": {
      "abs": 0.009696,
      "ok": true,
      "dot": 0.211374
     },
     "q2_0": {
      "abs": 0.008672,
      "ok": true,
      "dot": 0.140697
     }
    },
    "a100": {
     "f16": {
      "abs": 4e-06,
      "ok": true,
      "dot": 1e-05
     },
     "q4_0": {
      "abs": 0.001121,
      "ok": true,
      "dot": 0.001143
     },
     "q4_1": {
      "abs": 0.001144,
      "ok": true,
      "dot": 0.007931
     },
     "q5_0": {
      "abs": 0.000591,
      "ok": true,
      "dot": 0.001353
     },
     "q5_1": {
      "abs": 0.000556,
      "ok": true,
      "dot": 0.001511
     },
     "q8_0": {
      "abs": 7.4e-05,
      "ok": true,
      "dot": 9.2e-05
     },
     "q2_K": {
      "abs": 0.004673,
      "ok": true,
      "dot": 0.010665
     },
     "q3_K": {
      "abs": 0.00251,
      "ok": true,
      "dot": 0.016686
     },
     "q4_K": {
      "abs": 0.000982,
      "ok": true,
      "dot": 0.002318
     },
     "q5_K": {
      "abs": 0.000532,
      "ok": true,
      "dot": 0.001595
     },
     "q6_K": {
      "abs": 0.000261,
      "ok": true,
      "dot": 0.000215
     },
     "iq4_nl": {
      "abs": 0.001296,
      "ok": true,
      "dot": 0.005155
     },
     "iq4_xs": {
      "abs": 0.001256,
      "ok": true,
      "dot": 0.002499
     },
     "bf16": {
      "abs": 3.6e-05,
      "ok": true,
      "dot": 0.000169
     },
     "tq1_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "tq2_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "mxfp4": {
      "abs": 0.001881,
      "ok": true,
      "dot": 0.005677
     },
     "nvfp4": {
      "abs": 0.002337,
      "ok": true,
      "dot": 0.019774
     },
     "q1_0": {
      "abs": 0.009696,
      "ok": true,
      "dot": 0.211374
     },
     "q2_0": {
      "abs": 0.008672,
      "ok": true,
      "dot": 0.140697
     }
    }
   },
   "plain-repack": {
    "x100": {
     "f16": {
      "abs": 4e-06,
      "ok": true,
      "dot": 1e-05
     },
     "q4_0": {
      "abs": 0.001121,
      "ok": true,
      "dot": 0.001143
     },
     "q4_1": {
      "abs": 0.001144,
      "ok": true,
      "dot": 0.007931
     },
     "q5_0": {
      "abs": 0.000591,
      "ok": true,
      "dot": 0.001353
     },
     "q5_1": {
      "abs": 0.000556,
      "ok": true,
      "dot": 0.001511
     },
     "q8_0": {
      "abs": 7.4e-05,
      "ok": true,
      "dot": 9.2e-05
     },
     "q2_K": {
      "abs": 0.004673,
      "ok": true,
      "dot": 0.010665
     },
     "q3_K": {
      "abs": 0.00251,
      "ok": true,
      "dot": 0.016686
     },
     "q4_K": {
      "abs": 0.000982,
      "ok": true,
      "dot": 0.002318
     },
     "q5_K": {
      "abs": 0.000532,
      "ok": true,
      "dot": 0.001595
     },
     "q6_K": {
      "abs": 0.000261,
      "ok": true,
      "dot": 0.000215
     },
     "iq4_nl": {
      "abs": 0.001296,
      "ok": true,
      "dot": 0.005155
     },
     "iq4_xs": {
      "abs": 0.001256,
      "ok": true,
      "dot": 0.002499
     },
     "bf16": {
      "abs": 3.6e-05,
      "ok": true,
      "dot": 0.000169
     },
     "tq1_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "tq2_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "mxfp4": {
      "abs": 0.001881,
      "ok": true,
      "dot": 0.005677
     },
     "nvfp4": {
      "abs": 0.002337,
      "ok": true,
      "dot": 0.019774
     },
     "q1_0": {
      "abs": 0.009696,
      "ok": true,
      "dot": 0.211374
     },
     "q2_0": {
      "abs": 0.008672,
      "ok": true,
      "dot": 0.140697
     }
    },
    "a100": {
     "f16": {
      "abs": 4e-06,
      "ok": true,
      "dot": 1e-05
     },
     "q4_0": {
      "abs": 0.001121,
      "ok": true,
      "dot": 0.001143
     },
     "q4_1": {
      "abs": 0.001144,
      "ok": true,
      "dot": 0.007931
     },
     "q5_0": {
      "abs": 0.000591,
      "ok": true,
      "dot": 0.001353
     },
     "q5_1": {
      "abs": 0.000556,
      "ok": true,
      "dot": 0.001511
     },
     "q8_0": {
      "abs": 7.4e-05,
      "ok": true,
      "dot": 9.2e-05
     },
     "q2_K": {
      "abs": 0.004673,
      "ok": true,
      "dot": 0.010665
     },
     "q3_K": {
      "abs": 0.00251,
      "ok": true,
      "dot": 0.016686
     },
     "q4_K": {
      "abs": 0.000982,
      "ok": true,
      "dot": 0.002318
     },
     "q5_K": {
      "abs": 0.000532,
      "ok": true,
      "dot": 0.001595
     },
     "q6_K": {
      "abs": 0.000261,
      "ok": true,
      "dot": 0.000215
     },
     "iq4_nl": {
      "abs": 0.001296,
      "ok": true,
      "dot": 0.005155
     },
     "iq4_xs": {
      "abs": 0.001256,
      "ok": true,
      "dot": 0.002499
     },
     "bf16": {
      "abs": 3.6e-05,
      "ok": true,
      "dot": 0.000169
     },
     "tq1_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "tq2_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "mxfp4": {
      "abs": 0.001881,
      "ok": true,
      "dot": 0.005677
     },
     "nvfp4": {
      "abs": 0.002337,
      "ok": true,
      "dot": 0.019774
     },
     "q1_0": {
      "abs": 0.009696,
      "ok": true,
      "dot": 0.211374
     },
     "q2_0": {
      "abs": 0.008672,
      "ok": true,
      "dot": 0.140697
     }
    }
   },
   "plain-norepack": {
    "x100": {
     "f16": {
      "abs": 4e-06,
      "ok": true,
      "dot": 1e-05
     },
     "q4_0": {
      "abs": 0.001121,
      "ok": true,
      "dot": 0.001143
     },
     "q4_1": {
      "abs": 0.001144,
      "ok": true,
      "dot": 0.007931
     },
     "q5_0": {
      "abs": 0.000591,
      "ok": true,
      "dot": 0.001353
     },
     "q5_1": {
      "abs": 0.000556,
      "ok": true,
      "dot": 0.001511
     },
     "q8_0": {
      "abs": 7.4e-05,
      "ok": true,
      "dot": 9.2e-05
     },
     "q2_K": {
      "abs": 0.004673,
      "ok": true,
      "dot": 0.010665
     },
     "q3_K": {
      "abs": 0.00251,
      "ok": true,
      "dot": 0.016686
     },
     "q4_K": {
      "abs": 0.000982,
      "ok": true,
      "dot": 0.002318
     },
     "q5_K": {
      "abs": 0.000532,
      "ok": true,
      "dot": 0.001595
     },
     "q6_K": {
      "abs": 0.000261,
      "ok": true,
      "dot": 0.000215
     },
     "iq4_nl": {
      "abs": 0.001296,
      "ok": true,
      "dot": 0.005155
     },
     "iq4_xs": {
      "abs": 0.001256,
      "ok": true,
      "dot": 0.002499
     },
     "bf16": {
      "abs": 3.6e-05,
      "ok": true,
      "dot": 0.000169
     },
     "tq1_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "tq2_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "mxfp4": {
      "abs": 0.001881,
      "ok": true,
      "dot": 0.005677
     },
     "nvfp4": {
      "abs": 0.002337,
      "ok": true,
      "dot": 0.019774
     },
     "q1_0": {
      "abs": 0.009696,
      "ok": true,
      "dot": 0.211374
     },
     "q2_0": {
      "abs": 0.008672,
      "ok": true,
      "dot": 0.140697
     }
    },
    "a100": {
     "f16": {
      "abs": 4e-06,
      "ok": true,
      "dot": 1e-05
     },
     "q4_0": {
      "abs": 0.001121,
      "ok": true,
      "dot": 0.001143
     },
     "q4_1": {
      "abs": 0.001144,
      "ok": true,
      "dot": 0.007931
     },
     "q5_0": {
      "abs": 0.000591,
      "ok": true,
      "dot": 0.001353
     },
     "q5_1": {
      "abs": 0.000556,
      "ok": true,
      "dot": 0.001511
     },
     "q8_0": {
      "abs": 7.4e-05,
      "ok": true,
      "dot": 9.2e-05
     },
     "q2_K": {
      "abs": 0.004673,
      "ok": true,
      "dot": 0.010665
     },
     "q3_K": {
      "abs": 0.00251,
      "ok": true,
      "dot": 0.016686
     },
     "q4_K": {
      "abs": 0.000982,
      "ok": true,
      "dot": 0.002318
     },
     "q5_K": {
      "abs": 0.000532,
      "ok": true,
      "dot": 0.001595
     },
     "q6_K": {
      "abs": 0.000261,
      "ok": true,
      "dot": 0.000215
     },
     "iq4_nl": {
      "abs": 0.001296,
      "ok": true,
      "dot": 0.005155
     },
     "iq4_xs": {
      "abs": 0.001256,
      "ok": true,
      "dot": 0.002499
     },
     "bf16": {
      "abs": 3.6e-05,
      "ok": true,
      "dot": 0.000169
     },
     "tq1_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "tq2_0": {
      "abs": 0.008681,
      "ok": true,
      "dot": 0.141345
     },
     "mxfp4": {
      "abs": 0.001881,
      "ok": true,
      "dot": 0.005677
     },
     "nvfp4": {
      "abs": 0.002337,
      "ok": true,
      "dot": 0.019774
     },
     "q1_0": {
      "abs": 0.009696,
      "ok": true,
      "dot": 0.211374
     },
     "q2_0": {
      "abs": 0.008672,
      "ok": true,
      "dot": 0.140697
     }
    }
   }
  },
  "order": [
   "f16",
   "q4_0",
   "q4_1",
   "q5_0",
   "q5_1",
   "q8_0",
   "q2_K",
   "q3_K",
   "q4_K",
   "q5_K",
   "q6_K",
   "iq4_nl",
   "iq4_xs",
   "bf16",
   "tq1_0",
   "tq2_0",
   "mxfp4",
   "nvfp4",
   "q1_0",
   "q2_0"
  ],
  "ok_count": {
   "f16": 6,
   "q4_0": 6,
   "q4_1": 6,
   "q5_0": 6,
   "q5_1": 6,
   "q8_0": 6,
   "q2_K": 6,
   "q3_K": 6,
   "q4_K": 6,
   "q5_K": 6,
   "q6_K": 6,
   "iq4_nl": 6,
   "iq4_xs": 6,
   "bf16": 6,
   "tq1_0": 6,
   "tq2_0": 6,
   "mxfp4": 6,
   "nvfp4": 6,
   "q1_0": 6,
   "q2_0": 6
  },
  "n_builds": 3
 },
 "perf": {
  "spacemit": {
   "x100": {
    "f16": {
     "quantize_row_q_reference": 1.0,
     "quantize_row_q": 11.74,
     "dequantize_row_q": 1.7,
     "quantize_row_q_dot": 10.9,
     "vec_dot_q": 21.8
    },
    "q4_0": {
     "quantize_row_q_reference": 0.92,
     "quantize_row_q": 0.92,
     "dequantize_row_q": 2.93,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 6.1
    },
    "q4_1": {
     "quantize_row_q_reference": 0.64,
     "quantize_row_q": 0.64,
     "dequantize_row_q": 2.93,
     "quantize_row_q_dot": 1.64,
     "vec_dot_q": 6.36
    },
    "q5_0": {
     "quantize_row_q_reference": 0.74,
     "quantize_row_q": 0.75,
     "dequantize_row_q": 2.18,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 5.26
    },
    "q5_1": {
     "quantize_row_q_reference": 0.6,
     "quantize_row_q": 0.61,
     "dequantize_row_q": 2.15,
     "quantize_row_q_dot": 1.64,
     "vec_dot_q": 5.09
    },
    "q8_0": {
     "quantize_row_q_reference": 0.45,
     "quantize_row_q": 1.91,
     "dequantize_row_q": 2.68,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 7.27
    },
    "iq4_nl": {
     "quantize_row_q_reference": 0.14,
     "quantize_row_q": 0.14,
     "dequantize_row_q": 2.46,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 11.74
    },
    "iq4_xs": {
     "quantize_row_q_reference": 0.01,
     "quantize_row_q": 0.01,
     "dequantize_row_q": 2.42,
     "quantize_row_q_dot": 2.54,
     "vec_dot_q": 7.63
    },
    "bf16": {
     "quantize_row_q_reference": 2.28,
     "quantize_row_q": 1.84,
     "dequantize_row_q": 4.02,
     "quantize_row_q_dot": 2.01,
     "vec_dot_q": 2.01
    },
    "tq1_0": {
     "quantize_row_q_reference": 0.24,
     "quantize_row_q": 0.24,
     "dequantize_row_q": 1.84,
     "quantize_row_q_dot": 2.54,
     "vec_dot_q": 12.72
    },
    "tq2_0": {
     "quantize_row_q_reference": 0.24,
     "quantize_row_q": 0.23,
     "dequantize_row_q": 1.93,
     "quantize_row_q_dot": 2.54,
     "vec_dot_q": 25.43
    },
    "mxfp4": {
     "quantize_row_q_reference": 0.15,
     "quantize_row_q": 0.15,
     "dequantize_row_q": 2.59,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 10.17
    },
    "nvfp4": {
     "quantize_row_q_reference": 0.15,
     "quantize_row_q": 0.15,
     "dequantize_row_q": 1.33,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 1.53
    },
    "q1_0": {
     "quantize_row_q_reference": 0.92,
     "quantize_row_q": 0.92,
     "dequantize_row_q": 1.33,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 15.26
    },
    "q2_0": {
     "quantize_row_q_reference": 0.38,
     "quantize_row_q": 0.38,
     "dequantize_row_q": 1.82,
     "quantize_row_q_dot": 1.84,
     "vec_dot_q": 3.81
    }
   },
   "a100": {
    "f16": {
     "quantize_row_q_reference": 0.23,
     "quantize_row_q": 7.63,
     "dequantize_row_q": 0.32,
     "quantize_row_q_dot": 10.9,
     "vec_dot_q": 8.98
    },
    "q4_0": {
     "quantize_row_q_reference": 0.3,
     "quantize_row_q": 0.3,
     "dequantize_row_q": 1.47,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.14
    },
    "q4_1": {
     "quantize_row_q_reference": 0.26,
     "quantize_row_q": 0.26,
     "dequantize_row_q": 1.44,
     "quantize_row_q_dot": 0.61,
     "vec_dot_q": 1.12
    },
    "q5_0": {
     "quantize_row_q_reference": 0.27,
     "quantize_row_q": 0.26,
     "dequantize_row_q": 0.72,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 0.97
    },
    "q5_1": {
     "quantize_row_q_reference": 0.25,
     "quantize_row_q": 0.26,
     "dequantize_row_q": 0.68,
     "quantize_row_q_dot": 0.61,
     "vec_dot_q": 1.0
    },
    "q8_0": {
     "quantize_row_q_reference": 0.16,
     "quantize_row_q": 0.65,
     "dequantize_row_q": 0.79,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.05
    },
    "iq4_nl": {
     "quantize_row_q_reference": 0.04,
     "quantize_row_q": 0.04,
     "dequantize_row_q": 1.24,
     "quantize_row_q_dot": 0.69,
     "vec_dot_q": 1.3
    },
    "iq4_xs": {
     "quantize_row_q_reference": 0.0,
     "quantize_row_q": 0.0,
     "dequantize_row_q": 1.4,
     "quantize_row_q_dot": 1.82,
     "vec_dot_q": 2.35
    },
    "bf16": {
     "quantize_row_q_reference": 0.82,
     "quantize_row_q": 0.82,
     "dequantize_row_q": 1.68,
     "quantize_row_q_dot": 0.83,
     "vec_dot_q": 0.55
    },
    "tq1_0": {
     "quantize_row_q_reference": 0.19,
     "quantize_row_q": 0.19,
     "dequantize_row_q": 0.54,
     "quantize_row_q_dot": 1.82,
     "vec_dot_q": 3.32
    },
    "tq2_0": {
     "quantize_row_q_reference": 0.19,
     "quantize_row_q": 0.19,
     "dequantize_row_q": 0.8,
     "quantize_row_q_dot": 1.8,
     "vec_dot_q": 4.02
    },
    "mxfp4": {
     "quantize_row_q_reference": 0.03,
     "quantize_row_q": 0.03,
     "dequantize_row_q": 1.17,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.28
    },
    "nvfp4": {
     "quantize_row_q_reference": 0.03,
     "quantize_row_q": 0.03,
     "dequantize_row_q": 0.7,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 0.64
    },
    "q1_0": {
     "quantize_row_q_reference": 0.33,
     "quantize_row_q": 0.33,
     "dequantize_row_q": 0.7,
     "quantize_row_q_dot": 0.69,
     "vec_dot_q": 2.12
    },
    "q2_0": {
     "quantize_row_q_reference": 0.12,
     "quantize_row_q": 0.12,
     "dequantize_row_q": 0.66,
     "quantize_row_q_dot": 0.63,
     "vec_dot_q": 1.73
    }
   }
  },
  "plain-repack": {
   "x100": {
    "f16": {
     "quantize_row_q_reference": 1.0,
     "quantize_row_q": 10.17,
     "dequantize_row_q": 1.68,
     "quantize_row_q_dot": 10.9,
     "vec_dot_q": 19.07
    },
    "q4_0": {
     "quantize_row_q_reference": 0.92,
     "quantize_row_q": 0.92,
     "dequantize_row_q": 2.99,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 5.87
    },
    "q4_1": {
     "quantize_row_q_reference": 0.64,
     "quantize_row_q": 0.65,
     "dequantize_row_q": 2.93,
     "quantize_row_q_dot": 1.62,
     "vec_dot_q": 6.94
    },
    "q5_0": {
     "quantize_row_q_reference": 0.73,
     "quantize_row_q": 0.76,
     "dequantize_row_q": 2.18,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 5.45
    },
    "q5_1": {
     "quantize_row_q_reference": 0.59,
     "quantize_row_q": 0.6,
     "dequantize_row_q": 2.15,
     "quantize_row_q_dot": 1.62,
     "vec_dot_q": 5.09
    },
    "q8_0": {
     "quantize_row_q_reference": 0.45,
     "quantize_row_q": 1.86,
     "dequantize_row_q": 2.54,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 7.63
    },
    "iq4_nl": {
     "quantize_row_q_reference": 0.14,
     "quantize_row_q": 0.14,
     "dequantize_row_q": 2.54,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 10.9
    },
    "iq4_xs": {
     "quantize_row_q_reference": 0.01,
     "quantize_row_q": 0.01,
     "dequantize_row_q": 2.93,
     "quantize_row_q_dot": 2.54,
     "vec_dot_q": 7.63
    },
    "bf16": {
     "quantize_row_q_reference": 2.35,
     "quantize_row_q": 2.03,
     "dequantize_row_q": 4.12,
     "quantize_row_q_dot": 2.01,
     "vec_dot_q": 2.01
    },
    "tq1_0": {
     "quantize_row_q_reference": 0.32,
     "quantize_row_q": 0.32,
     "dequantize_row_q": 1.84,
     "quantize_row_q_dot": 2.63,
     "vec_dot_q": 11.74
    },
    "tq2_0": {
     "quantize_row_q_reference": 0.3,
     "quantize_row_q": 0.3,
     "dequantize_row_q": 1.91,
     "quantize_row_q_dot": 2.59,
     "vec_dot_q": 21.8
    },
    "mxfp4": {
     "quantize_row_q_reference": 0.15,
     "quantize_row_q": 0.15,
     "dequantize_row_q": 2.54,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 10.9
    },
    "nvfp4": {
     "quantize_row_q_reference": 0.15,
     "quantize_row_q": 0.16,
     "dequantize_row_q": 1.61,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 1.51
    },
    "q1_0": {
     "quantize_row_q_reference": 0.92,
     "quantize_row_q": 0.92,
     "dequantize_row_q": 1.43,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 15.26
    },
    "q2_0": {
     "quantize_row_q_reference": 0.37,
     "quantize_row_q": 0.38,
     "dequantize_row_q": 1.84,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 3.81
    }
   },
   "a100": {
    "f16": {
     "quantize_row_q_reference": 0.24,
     "quantize_row_q": 8.03,
     "dequantize_row_q": 0.32,
     "quantize_row_q_dot": 10.9,
     "vec_dot_q": 9.54
    },
    "q4_0": {
     "quantize_row_q_reference": 0.3,
     "quantize_row_q": 0.3,
     "dequantize_row_q": 1.33,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.13
    },
    "q4_1": {
     "quantize_row_q_reference": 0.26,
     "quantize_row_q": 0.26,
     "dequantize_row_q": 1.43,
     "quantize_row_q_dot": 0.61,
     "vec_dot_q": 1.13
    },
    "q5_0": {
     "quantize_row_q_reference": 0.24,
     "quantize_row_q": 0.27,
     "dequantize_row_q": 0.72,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 0.97
    },
    "q5_1": {
     "quantize_row_q_reference": 0.26,
     "quantize_row_q": 0.25,
     "dequantize_row_q": 0.68,
     "quantize_row_q_dot": 0.6,
     "vec_dot_q": 1.0
    },
    "q8_0": {
     "quantize_row_q_reference": 0.16,
     "quantize_row_q": 0.66,
     "dequantize_row_q": 0.79,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 0.9
    },
    "iq4_nl": {
     "quantize_row_q_reference": 0.04,
     "quantize_row_q": 0.04,
     "dequantize_row_q": 1.24,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.32
    },
    "iq4_xs": {
     "quantize_row_q_reference": 0.0,
     "quantize_row_q": 0.0,
     "dequantize_row_q": 1.41,
     "quantize_row_q_dot": 1.8,
     "vec_dot_q": 2.38
    },
    "bf16": {
     "quantize_row_q_reference": 0.83,
     "quantize_row_q": 0.83,
     "dequantize_row_q": 1.66,
     "quantize_row_q_dot": 0.83,
     "vec_dot_q": 0.56
    },
    "tq1_0": {
     "quantize_row_q_reference": 0.16,
     "quantize_row_q": 0.16,
     "dequantize_row_q": 0.54,
     "quantize_row_q_dot": 1.8,
     "vec_dot_q": 3.47
    },
    "tq2_0": {
     "quantize_row_q_reference": 0.17,
     "quantize_row_q": 0.16,
     "dequantize_row_q": 0.81,
     "quantize_row_q_dot": 1.82,
     "vec_dot_q": 4.02
    },
    "mxfp4": {
     "quantize_row_q_reference": 0.03,
     "quantize_row_q": 0.03,
     "dequantize_row_q": 1.3,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.28
    },
    "nvfp4": {
     "quantize_row_q_reference": 0.03,
     "quantize_row_q": 0.03,
     "dequantize_row_q": 0.68,
     "quantize_row_q_dot": 0.67,
     "vec_dot_q": 0.63
    },
    "q1_0": {
     "quantize_row_q_reference": 0.33,
     "quantize_row_q": 0.33,
     "dequantize_row_q": 0.73,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 2.09
    },
    "q2_0": {
     "quantize_row_q_reference": 0.12,
     "quantize_row_q": 0.12,
     "dequantize_row_q": 0.66,
     "quantize_row_q_dot": 0.67,
     "vec_dot_q": 1.75
    }
   }
  },
  "plain-norepack": {
   "x100": {
    "f16": {
     "quantize_row_q_reference": 1.0,
     "quantize_row_q": 10.9,
     "dequantize_row_q": 1.7,
     "quantize_row_q_dot": 12.72,
     "vec_dot_q": 19.07
    },
    "q4_0": {
     "quantize_row_q_reference": 0.9,
     "quantize_row_q": 0.9,
     "dequantize_row_q": 3.05,
     "quantize_row_q_dot": 1.91,
     "vec_dot_q": 6.36
    },
    "q4_1": {
     "quantize_row_q_reference": 0.63,
     "quantize_row_q": 0.65,
     "dequantize_row_q": 2.93,
     "quantize_row_q_dot": 1.62,
     "vec_dot_q": 6.63
    },
    "q5_0": {
     "quantize_row_q_reference": 0.73,
     "quantize_row_q": 0.76,
     "dequantize_row_q": 2.18,
     "quantize_row_q_dot": 1.71,
     "vec_dot_q": 5.45
    },
    "q5_1": {
     "quantize_row_q_reference": 0.6,
     "quantize_row_q": 0.61,
     "dequantize_row_q": 2.15,
     "quantize_row_q_dot": 1.64,
     "vec_dot_q": 5.09
    },
    "q8_0": {
     "quantize_row_q_reference": 0.45,
     "quantize_row_q": 1.86,
     "dequantize_row_q": 2.54,
     "quantize_row_q_dot": 1.88,
     "vec_dot_q": 7.63
    },
    "iq4_nl": {
     "quantize_row_q_reference": 0.14,
     "quantize_row_q": 0.14,
     "dequantize_row_q": 2.54,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 10.17
    },
    "iq4_xs": {
     "quantize_row_q_reference": 0.01,
     "quantize_row_q": 0.01,
     "dequantize_row_q": 2.93,
     "quantize_row_q_dot": 2.54,
     "vec_dot_q": 7.63
    },
    "bf16": {
     "quantize_row_q_reference": 2.28,
     "quantize_row_q": 2.03,
     "dequantize_row_q": 4.02,
     "quantize_row_q_dot": 2.01,
     "vec_dot_q": 2.21
    },
    "tq1_0": {
     "quantize_row_q_reference": 0.38,
     "quantize_row_q": 0.37,
     "dequantize_row_q": 1.64,
     "quantize_row_q_dot": 2.54,
     "vec_dot_q": 11.74
    },
    "tq2_0": {
     "quantize_row_q_reference": 0.35,
     "quantize_row_q": 0.36,
     "dequantize_row_q": 1.91,
     "quantize_row_q_dot": 2.54,
     "vec_dot_q": 25.43
    },
    "mxfp4": {
     "quantize_row_q_reference": 0.15,
     "quantize_row_q": 0.15,
     "dequantize_row_q": 2.54,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 10.9
    },
    "nvfp4": {
     "quantize_row_q_reference": 0.15,
     "quantize_row_q": 0.15,
     "dequantize_row_q": 1.62,
     "quantize_row_q_dot": 1.91,
     "vec_dot_q": 1.5
    },
    "q1_0": {
     "quantize_row_q_reference": 0.94,
     "quantize_row_q": 0.93,
     "dequantize_row_q": 1.43,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 15.26
    },
    "q2_0": {
     "quantize_row_q_reference": 0.38,
     "quantize_row_q": 0.38,
     "dequantize_row_q": 1.88,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 4.02
    }
   },
   "a100": {
    "f16": {
     "quantize_row_q_reference": 0.24,
     "quantize_row_q": 8.98,
     "dequantize_row_q": 0.32,
     "quantize_row_q_dot": 11.74,
     "vec_dot_q": 8.98
    },
    "q4_0": {
     "quantize_row_q_reference": 0.3,
     "quantize_row_q": 0.3,
     "dequantize_row_q": 1.51,
     "quantize_row_q_dot": 0.65,
     "vec_dot_q": 1.14
    },
    "q4_1": {
     "quantize_row_q_reference": 0.26,
     "quantize_row_q": 0.26,
     "dequantize_row_q": 1.44,
     "quantize_row_q_dot": 0.61,
     "vec_dot_q": 1.12
    },
    "q5_0": {
     "quantize_row_q_reference": 0.27,
     "quantize_row_q": 0.27,
     "dequantize_row_q": 0.72,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 0.97
    },
    "q5_1": {
     "quantize_row_q_reference": 0.25,
     "quantize_row_q": 0.26,
     "dequantize_row_q": 0.68,
     "quantize_row_q_dot": 0.61,
     "vec_dot_q": 1.0
    },
    "q8_0": {
     "quantize_row_q_reference": 0.16,
     "quantize_row_q": 0.65,
     "dequantize_row_q": 0.78,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.05
    },
    "iq4_nl": {
     "quantize_row_q_reference": 0.04,
     "quantize_row_q": 0.04,
     "dequantize_row_q": 1.25,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.29
    },
    "iq4_xs": {
     "quantize_row_q_reference": 0.0,
     "quantize_row_q": 0.0,
     "dequantize_row_q": 1.4,
     "quantize_row_q_dot": 1.82,
     "vec_dot_q": 2.38
    },
    "bf16": {
     "quantize_row_q_reference": 0.76,
     "quantize_row_q": 0.82,
     "dequantize_row_q": 1.66,
     "quantize_row_q_dot": 0.82,
     "vec_dot_q": 0.55
    },
    "tq1_0": {
     "quantize_row_q_reference": 0.19,
     "quantize_row_q": 0.19,
     "dequantize_row_q": 0.51,
     "quantize_row_q_dot": 1.86,
     "vec_dot_q": 3.39
    },
    "tq2_0": {
     "quantize_row_q_reference": 0.2,
     "quantize_row_q": 0.2,
     "dequantize_row_q": 0.81,
     "quantize_row_q_dot": 1.84,
     "vec_dot_q": 4.12
    },
    "mxfp4": {
     "quantize_row_q_reference": 0.03,
     "quantize_row_q": 0.03,
     "dequantize_row_q": 1.28,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.28
    },
    "nvfp4": {
     "quantize_row_q_reference": 0.03,
     "quantize_row_q": 0.03,
     "dequantize_row_q": 0.71,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 0.63
    },
    "q1_0": {
     "quantize_row_q_reference": 0.33,
     "quantize_row_q": 0.32,
     "dequantize_row_q": 0.73,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 2.12
    },
    "q2_0": {
     "quantize_row_q_reference": 0.12,
     "quantize_row_q": 0.12,
     "dequantize_row_q": 0.65,
     "quantize_row_q_dot": 0.68,
     "vec_dot_q": 1.75
    }
   }
  }
 },
 "official": [
  {
   "name": "qwen3-0.6B-q4_0",
   "tcm_on": [
    529.4,
    50.9
   ],
   "tcm_off": [
    478.9,
    48.6
   ],
   "tcm_gain": [
    10.5,
    4.7
   ],
   "official": [
    565.8,
    55.8
   ],
   "vs_doc": [
    -6.4,
    -8.7
   ],
   "note": "pp 差官方 6.4%: 工具链/小模型开销, 频率 1.8->2.0GHz (AI核) 是追平关键"
  },
  {
   "name": "qwen3-4B-q4_0",
   "tcm_on": [
    82.7,
    10.0
   ],
   "tcm_off": [
    81.7,
    9.3
   ],
   "tcm_gain": [
    1.3,
    7.2
   ],
   "official": [
    79.7,
    11.3
   ],
   "vs_doc": [
    3.8,
    -11.4
   ],
   "note": "pp 反超官方 +3.8%; tg 低 11% (单 token GEMM 走通用内核)"
  },
  {
   "name": "qwen35-2b-q4_0",
   "tcm_on": [
    136.9,
    15.5
   ],
   "tcm_off": [
    125.8,
    14.6
   ],
   "tcm_gain": [
    8.8,
    6.0
   ],
   "official": [
    115.2,
    16.5
   ],
   "vs_doc": [
    18.8,
    -5.9
   ],
   "note": "官方文档用 Q4_1, 本地 Q4_0, 量化不同不可直接比 (pp +18.8% 含水)"
  },
  {
   "name": "gemma4-E4B-q4_k",
   "tcm_on": [
    48.0,
    6.2
   ],
   "tcm_off": [
    46.9,
    5.6
   ],
   "tcm_gain": [
    2.4,
    10.9
   ],
   "official": [
    21.1,
    5.7
   ],
   "vs_doc": [
    127.0,
    9.5
   ],
   "note": "官方 21.1 疑似旧构建/旧驱动, +127% 不可信, 谨慎对待"
  },
  {
   "name": "qwen3moe-30B-A3B-q4_0",
   "tcm_on": [
    58.6,
    11.5
   ],
   "tcm_off": [
    51.0,
    11.1
   ],
   "tcm_gain": [
    14.9,
    3.8
   ],
   "official": [
    57.9,
    12.8
   ],
   "vs_doc": [
    1.2,
    -10.1
   ],
   "note": "pp 与官方持平 (+1.2%); tg -10% 同 tg 带宽墙"
  }
 ],
 "model_order": [
  "gemma-3-4b",
  "prem-1b",
  "q0.5B-Q4_K",
  "q0.5B-Q6_K",
  "q1.5b-q2_k",
  "q1.5b-q3_k",
  "q1.5b-q4_k",
  "q1.5b-q5_k",
  "q1.5b-q6_k",
  "q1.5b-q8_0",
  "Q3-0.6B",
  "Q3-4B",
  "trendyol-7b"
 ],
 "generated": "extract_deck_data.py"
};
